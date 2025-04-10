<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'
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
  