<script setup>
defineProps(['style', 'link'])
</script>

<template>
  <nuxt-link :class="[style ?? 'primary']" class="button" :to="link">
    <slot />
  </nuxt-link>
</template>

<style>
.button {
  @apply font-bold py-2 px-4 rounded flex items-center justify-center gap-2;
}

.button.primary {
  @apply bg-primary-700 hover:bg-primary-600 text-white;
}

.button.neutral {
  @apply bg-gray-200 hover:bg-gray-300 text-gray-700;
}
</style>