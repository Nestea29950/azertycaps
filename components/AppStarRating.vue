<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

const fullStars = Math.floor(props.rating)
const partialFill = Math.round((props.rating % 1) * 100)
const hasPartialStar = partialFill > 0
const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0)
</script>

<template>
  <div class="flex items-center gap-1">
    <!-- Étoiles pleines -->
    <template v-for="n in fullStars" :key="'full-' + n">
      <svg class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
      </svg>
    </template>

    <!-- Étoile partielle -->
    <svg
      v-if="hasPartialStar"
      class="h-4 w-4 text-yellow-400"
      viewBox="0 0 24 24"
    >
      <defs>
        <linearGradient :id="`grad-${partialFill}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop :offset="`${partialFill}%`" stop-color="currentColor"/>
          <stop :offset="`${partialFill}%`" stop-color="lightgray"/>
        </linearGradient>
      </defs>
      <path
        :fill="`url(#grad-${partialFill})`"
        d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"
      />
    </svg>

    <!-- Étoiles vides -->
    <template v-for="n in emptyStars" :key="'empty-' + n">
      <svg class="h-4 w-4 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
      </svg>
    </template>
  </div>
</template>
