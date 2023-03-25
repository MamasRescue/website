<script setup>
defineProps(['style'])
</script>

<template>
  <button class="bg-primary-700 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
    <slot />
  </button>
</template>