<template>
    <UFooter>
        <template #default>
            <p>Copyright © {{ new Date().getFullYear() }} iopresto.com</p>
        </template>
        <template #right>
            <UButton
            icon="i-simple-icons-instagram"
            variant="ghost"
            aria-label="instagram"
            to="https://www.instagram.com/ioprestoitalia/"
            target="_blank"
            />
        </template>
    </UFooter>
</template>