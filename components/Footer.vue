<script setup>
const links = [
  { name: 'cgu', href: '/cgu' },
  { name: 'confidentiality', href: '/confidentiality' },
  { name: 'legal', href: '/legal' },
  { name: 'cookies', href: '/cookies' },
  { name: 'credits', href: '/credits' },
]
</script>

<template>
  <footer>
    <div class="custom-shape-divider-bottom-1679761405 drop-shadow-xl">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>
    <div class="grid bg-gradient-to-t from-secondary-200 to-secondary-100 relative gap-6 p-6 text-center">
      <div class="grid grid-cols-2 gap-3">
        <nuxt-link class="mx-auto" v-for="link in links" :key="link.name" :to="link.href">
          {{ $t(`links.${link.name}`) }}
        </nuxt-link>
      </div>
      <p class="text-primary-700">Mama's Rescue © 2023</p>
    </div>
  </footer>
</template>

<style>
.custom-shape-divider-bottom-1679761405 {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1679761405 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1679761405 .shape-fill {
    @apply fill-secondary-100;
}
</style>