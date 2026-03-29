<template>
	<BaseCard :title="t('contactForm.title')">
		<template #content>
			<!-- Intro -->
			<div class="mb-6 space-y-3">
				<p class="text-base md:text-lg text-muted">
					{{ t("contactForm.subtitle") }}
				</p>
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
					<UIcon name="i-lucide-map-pin" class="w-3.5 h-3.5" />
					{{ t("contactForm.cities") }}
				</span>
			</div>
			<hr class="border-t border-default mb-6" />

			<!-- Success screen -->
			<div v-if="submitted" class="flex flex-col items-center gap-4 py-8 text-center">
				<UIcon name="heroicons:check-circle" class="text-primary w-14 h-14" />
				<h2 class="text-xl font-semibold">{{ t("contactForm.successTitle") }}</h2>
				<p class="text-sm text-muted max-w-sm">{{ t("contactForm.successDesc") }}</p>
				<UButton variant="outline" color="primary" @click="resetForm">
					{{ t("contactForm.successReset") }}
				</UButton>
			</div>

			<!-- Wizard -->
			<template v-else>
				<UStepper v-model="stepperIndex" :items="stepperItems" disabled class="w-full">
					<template #step1>
						<ContactStep1 v-model:fullName="state.fullName" v-model:document="state.document" v-model:city="state.city"
							:errors="errors" class="pt-6" />
					</template>
					<template #step2>
						<ContactStep2 v-model:requestType="state.requestType" v-model:object="state.object"
							v-model:category="state.category" v-model:duration="state.duration"
							v-model:durationOther="state.durationOther" :errors="errors" class="pt-6" />
					</template>
					<template #step3>
						<ContactStep3 v-model:address="state.address" v-model:radius="state.radius" :errors="errors" class="pt-6" />
					</template>
					<template #step4>
						<ContactStep4 v-model:email="state.email" v-model:whatsapp="state.whatsapp"
							v-model:contactPreference="state.contactPreference" v-model:notes="state.notes" :errors="errors"
							class="pt-6" />
					</template>
				</UStepper>

				<!-- Navigation -->
				<div class="flex justify-between mt-8 gap-3">
					<UButton v-if="currentStep > 1" variant="outline" color="neutral" size="lg" @click="currentStep--">
						{{ t("contactForm.nav.back") }}
					</UButton>
					<div v-else />

					<UButton v-if="currentStep < TOTAL_STEPS" color="primary" variant="solid" size="lg" @click="nextStep">
						{{ t("contactForm.nav.next") }}
					</UButton>
					<UButton v-else color="primary" variant="solid" size="lg" :disabled="sending" @click="onSubmit">
						<span v-if="!sending">{{ t("contactForm.nav.submit") }}</span>
						<span v-else>{{ t("contactForm.nav.sending") }}</span>
					</UButton>
				</div>
			</template>
		</template>
	</BaseCard>
</template>

<script setup lang="ts">
import emailjs from "@emailjs/browser"
import BaseCard from "~/components/generic/BaseCard.vue"
import ContactStep1 from "~/components/contact/steps/Step1.vue"
import ContactStep2 from "~/components/contact/steps/Step2.vue"
import ContactStep3 from "~/components/contact/steps/Step3.vue"
import ContactStep4 from "~/components/contact/steps/Step4.vue"
import { useI18n } from "vue-i18n"
import { ref, reactive, computed } from "vue"

const config = useRuntimeConfig()

const { t } = useI18n()
const toast = useToast ? useToast() : ({ add: () => { } } as any)

const TOTAL_STEPS = 4
const currentStep = ref(1)
const sending = ref(false)
const submitted = ref(false)

const state = reactive({
	fullName: "",
	document: "",
	city: "",
	requestType: "",
	object: "",
	category: "",
	duration: "",
	durationOther: "",
	address: "",
	radius: "",
	email: "",
	whatsapp: "",
	contactPreference: "",
	notes: ""
})

const errors = reactive<Record<string, string>>({})

const stepperIndex = computed({
	get: () => currentStep.value - 1,
	set: (val: string | number | undefined) => {
		if (typeof val === "number") currentStep.value = val + 1
	}
})

const stepperItems = computed(() => [
	{ slot: "step1", title: t("contactForm.steps.step1"), icon: "i-lucide-user" },
	{ slot: "step2", title: t("contactForm.steps.step2"), icon: "i-lucide-package" },
	{ slot: "step3", title: t("contactForm.steps.step3"), icon: "i-lucide-map-pin" },
	{ slot: "step4", title: t("contactForm.steps.step4"), icon: "i-lucide-phone" }
])

const requestTypeOptions = [
	{ value: "prendo_in_prestito", label: "PRENDO IN PRESTITO" },
	{ value: "presto", label: "PRESTO" }
]
const categoryOptions = [
	{ value: "bricolage", label: "Bricolage" },
	{ value: "libri_riviste", label: "Libri e riviste" },
	{ value: "sport", label: "Sport" },
	{ value: "altro", label: "Altro" }
]
const durationOptions = [
	{ value: "1_giorno", label: "1 giorno" },
	{ value: "3_giorni", label: "3 giorni" },
	{ value: "1_settimana", label: "1 settimana" },
	{ value: "altro", label: "Altro" }
]
const radiusOptions = [
	{ value: "1km_5km", label: "1 km - 5 km" },
	{ value: "5km_8km", label: "5 km - 8 km" },
	{ value: "8km_12km", label: "8 km - 12 km" }
]
const contactPreferenceOptions = [
	{ value: "email", label: "Email" },
	{ value: "whatsapp", label: "WhatsApp" },
	{ value: "indifferente", label: "Indifferente" }
]

function validateStep(step: number): boolean {
	const stepKeys: Record<number, string[]> = {
		1: ["fullName", "document", "city"],
		2: ["requestType", "object", "category", "duration", "durationOther"],
		3: ["address", "radius"],
		4: ["email", "contactPreference"]
	}
	for (const key of stepKeys[step]) delete errors[key]

	let valid = true

	if (step === 1) {
		if (!state.fullName || state.fullName.trim().length < 2) {
			errors.fullName = t("contactForm.errors.fullName"); valid = false
		}
		const doc = state.document.trim().toUpperCase()
		const cfRx = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/
		const docRx = /^[A-Z0-9]{5,20}$/i
		if (!doc || (!cfRx.test(doc) && !docRx.test(doc))) {
			errors.document = t("contactForm.errors.document"); valid = false
		}
		if (!state.city) {
			errors.city = t("contactForm.errors.city"); valid = false
		}
	}
	if (step === 2) {
		if (!state.requestType) {
			errors.requestType = t("contactForm.errors.requestType"); valid = false
		}
		if (!state.object || state.object.trim().length < 3) {
			errors.object = t("contactForm.errors.object"); valid = false
		}
		if (!state.category) {
			errors.category = t("contactForm.errors.category"); valid = false
		}
		if (!state.duration) {
			errors.duration = t("contactForm.errors.duration"); valid = false
		}
		if (state.duration === "altro" && !state.durationOther.trim()) {
			errors.durationOther = t("contactForm.errors.durationOther"); valid = false
		}
	}
	if (step === 3) {
		if (!state.address || state.address.trim().length < 3) {
			errors.address = t("contactForm.errors.address"); valid = false
		}
		if (!state.radius) {
			errors.radius = t("contactForm.errors.radius"); valid = false
		}
	}
	if (step === 4) {
		const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!state.email || !emailRx.test(state.email)) {
			errors.email = t("contactForm.errors.email"); valid = false
		}
		if (!state.contactPreference) {
			errors.contactPreference = t("contactForm.errors.contactPreference"); valid = false
		}
	}

	return valid
}

function nextStep() {
	if (validateStep(currentStep.value)) currentStep.value++
}

function labelFor(options: { value: string; label: string }[], value: string): string {
	return options.find((o) => o.value === value)?.label ?? value
}

function buildTemplateParams() {
	const requestTypeLabel = labelFor(requestTypeOptions, state.requestType)
	const categoryLabel = labelFor(categoryOptions, state.category)
	const durationLabel =
		state.duration === "altro" ? state.durationOther : labelFor(durationOptions, state.duration)
	const radiusLabel = labelFor(radiusOptions, state.radius)
	const preferenceLabel = labelFor(contactPreferenceOptions, state.contactPreference)
	const now = new Date().toLocaleString("it-IT")

	return {
		// Readable fields (use these in the EmailJS template)
		full_name: state.fullName,
		document: state.document,
		city: state.city,
		request_type: requestTypeLabel,
		object: state.object,
		category: categoryLabel,
		duration: durationLabel,
		address: state.address,
		radius: radiusLabel,
		email: state.email,
		whatsapp: state.whatsapp || "-",
		contact_preference: preferenceLabel,
		notes: state.notes || "-",
		submitted_at: now,
		// TSV row for Excel — single field in the template
		excel_row: [
			state.fullName, state.document, state.city,
			requestTypeLabel, state.object, categoryLabel, durationLabel,
			state.address, radiusLabel,
			state.email, state.whatsapp || "", preferenceLabel, state.notes || "",
			now
		].join("\t")
	}
}

async function onSubmit() {
	if (!validateStep(4)) return
	sending.value = true
	try {
		const params = buildTemplateParams()
		console.log("[EmailJS] template params:", params)
		await emailjs.send(
			config.public.emailjsServiceId,
			config.public.emailjsTemplateId,
			params,
			{ publicKey: config.public.emailjsPublicKey }
		)
		submitted.value = true
	} catch (e: any) {
		console.error("EmailJS error:", e)
		toast.add({ title: t("contactForm.errorGeneric"), description: t("contactForm.errorDesc"), color: "error", duration: 5000 })
	} finally {
		sending.value = false
	}
}

function resetForm() {
	Object.assign(state, {
		fullName: "", document: "", city: "",
		requestType: "", object: "", category: "", duration: "", durationOther: "",
		address: "", radius: "",
		email: "", whatsapp: "", contactPreference: "", notes: ""
	})
	for (const key in errors) delete errors[key]
	currentStep.value = 1
	submitted.value = false
}
</script>
