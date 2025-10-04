<template>
  <UCard class="p-8 bg-default rounded-xl shadow-lg" role="region" aria-label="Contatto iopresto">
    <header class="mb-14">
      <h3 class="text-2xl font-bold ">{{ t('contactForm.title', 'Contattaci') }}</h3>
      <p class="text-sm ">
        {{ t('contactForm.subtitle', 'Hai bisogno di aiuto? Scrivici e ti risponderemo a breve.') }}
      </p>
    </header>

    <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
      <div class="grid grid-cols-2 gap-6 w-full">
        <UFormField :label="t('contactForm.name', 'Nome')" name="name">
          <UInput v-model="state.name" placeholder="Mario Rossi" aria-label="Nome" class="w-full" />
        </UFormField>

        <UFormField :label="t('contactForm.email', 'Email')" name="email">
          <UInput v-model="state.email" type="email" placeholder="mario@esempio.com" aria-label="Email"
            class="w-full" />
        </UFormField>
      </div>

      <UFormField :label="t('contactForm.message', 'Messaggio')" name="message">
        <UTextarea v-model="state.message" :rows="6" placeholder="Scrivi il tuo messaggio..." aria-label="Messaggio"
          class="w-full" />
      </UFormField>

      <div class="pt-2 flex justify-center">
        <!-- Bottone con lo stile richiesto -->
        <UButton type="submit" :disabled="sending" size="xl" color="primary" variant="soft"
          class="border border-cyan-400 px-8 py-3 text-lg font-semibold backdrop-blur bg-white/10 hover:bg-cyan-500/30 transition-all"
          aria-label="Invia messaggio">
          <span v-if="!sending">{{ t('contactForm.submit', 'Invia') }}</span>
          <span v-else>{{ t('contactForm.sending', 'Invio...') }}</span>
        </UButton>
      </div>
    </UForm>

    <footer class="mt-4 text-xs text-center">
      <p>
        {{ t('contactForm.notice', 'Verrai reindirizzato al tuo client di posta per completare l\'invio.') }}
      </p>
    </footer>
  </UCard>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue'

const { t } = useI18n()
const toast = useToast ? useToast() : { success: () => { }, error: () => { } } as any

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(2, t('contactForm.errors.name', 'Nome troppo corto'))),
  email: v.pipe(v.string(), v.email(t('contactForm.errors.email', 'Email non valida'))),
  message: v.pipe(v.string(), v.minLength(10, t('contactForm.errors.message', 'Messaggio troppo corto')))
})

type Schema = v.InferOutput<typeof schema>

const state = reactive<Schema>({
  name: '',
  email: '',
  message: ''
})

const sending = ref(false)

function openMailClient(payload: { name: string; email: string; message: string }) {
  const support = 'support@iopresto.com'
  const subject = encodeURIComponent(`Messaggio da ${payload.name} - iopresto`)
  const bodyLines = [
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    '',
    payload.message
  ]
  const body = encodeURIComponent(bodyLines.join('\n'))

  const mailto = `mailto:${support}?subject=${subject}&body=${body}`

  try {
    window.location.href = mailto
    return true
  } catch (err) {
    try {
      window.open(mailto, '_blank')
      return true
    } catch (err2) {
      const fallbackText = `Invia a: ${support}\nOggetto: Messaggio da ${payload.name} - iopresto\n\n${payload.message}`
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(fallbackText).catch(() => { })
      }
      return false
    }
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  sending.value = true
  try {
    const payload = {
      name: event.data?.name ?? state.name,
      email: event.data?.email ?? state.email,
      message: event.data?.message ?? state.message
    }

    toast.add({
      title: t('contactForm.infoTitle', 'Invio messaggio'),
      description: t('contactForm.infoDesc', 'Stai per essere reindirizzato alla tua applicazione email per completare l\'invio. Nessun dato viene salvato.'),
      color: 'info',
      timeout: 6000
    })

    const opened = openMailClient(payload)

    if (opened) {
      toast.success(t('contactForm.openedClient', 'Client email aperto! Controlla la tua app di posta per inviare il messaggio.'))
    } else {
      toast.error(t('contactForm.fallbackCopied', 'Impossibile aprire il client di posta automaticamente. Testo copiato negli appunti.'))
    }

    state.name = ''
    state.email = ''
    state.message = ''
  } catch (e: any) {
    console.error(e)
    toast.error(e?.message || t('contactForm.errorGeneric', 'Errore nell\'invio'))
  } finally {
    sending.value = false
  }
}
</script>
