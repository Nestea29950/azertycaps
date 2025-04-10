<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
    <div>
      <SpeedInsights/>
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </template>
  