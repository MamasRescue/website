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
  <div class="flex flex-col md:flex-row items-center container mx-auto py-6 gap-6 justify-center text-xl">
    <nuxt-link :class="['link', `link-${link.name}`]" v-for="link in links" :key="link.name" :to="link.href">
      {{ $t(`links.${link.name}`) }}
    </nuxt-link>
  </div>
</template>

<style>
.link-home {
  @apply font-bold text-2xl decoration-transparent;
}
</style>