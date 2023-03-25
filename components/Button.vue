<script setup>
const props = defineProps(['type', 'link', 'disabled'])

function getType () {
  if (props.disabled) return ''
  if (props.type === 'primary') return 'btn-primary'
  if (props.type === 'ghost') return 'btn-ghost'
  return ''
}
</script>

<template>
  <nuxt-link :class="[getType()]" class="btn" :to="link">
    <slot />
  </nuxt-link>
</template>
