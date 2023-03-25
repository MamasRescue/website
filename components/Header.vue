<script setup>
const links = [
  { name: 'about', href: '/about' },
  { name: 'services', href: '/services' },
  { name: 'home', href: '/' },
  { name: 'contact', href: '/contact' },
  { name: 'login', href: '/login' },
]
</script>

<template>
  <div class="flex container mx-auto py-6 gap-6 justify-center text-xl">
    <nuxt-link :class="[`link-${link.name}`]" v-for="link in links" :key="link.name" :to="link.href">
      {{ link.name }}
    </nuxt-link>
  </div>
</template>

<style>
.link-home {
  @apply text-primary-700 font-bold;
}
</style>