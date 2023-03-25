<script setup>
const links = [
  { name: 'cgu', href: '/cgu' },
  { name: 'confidentiality', href: '/confidentiality' },
  { name: 'legal', href: '/legal' },
  { name: 'cookies', href: '/cookies' },
]
</script>

<template>
  <div class="grid gap-6 p-6 bg-gradient-to-t from-primary-100 text-center">
    <div class="flex gap-6 justify-center">
      <nuxt-link class="border-b border-current" v-for="link in links" :key="link.name" :to="link.href">
        {{ $t(`links.${link.name}`) }}
      </nuxt-link>
    </div>
    <p class="text-primary-700">Mama's Rescue © 2023</p>
  </div>
</template>