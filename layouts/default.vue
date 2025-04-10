<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'

if (process.server) {
  console.log('SSR - Côté serveur')
} else {
  console.log('SSG / CSR - Côté client')
}
</script>

<template>
    <div>
      <Analytics/>
      <SpeedInsights/>
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </template>
  