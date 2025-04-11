<script setup>

import { Analytics } from '@vercel/analytics/nuxt'

</script>

<template>
    <div>
      <Analytics/>
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </template>
  