<script setup>
const programs = [
  { name: 'program1', href: '/program1', image: 'https://zupimages.net/up/23/12/ul2t.png', pos: 'center' },
  { name: 'program2', href: '/program2', image: 'https://zupimages.net/up/23/12/nyyi.png', pos: 'center' },
  { name: 'program3', href: '/program3', image: 'https://zupimages.net/up/23/12/nf69.png', pos: 'center' },
]
</script>

<template>
  <div class="container mx-auto">
    <h1>Tableau de bord</h1>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
      <nuxt-link :style="{ backgroundImage: `url(${program.image})`, backgroundPosition: `${program.pos}` }" :class="['program', `program-${program.name}`]" v-for="program in programs"
        :key="program.name" :to="program.href">
        {{ $t(`dashboard.${program.name}`) }}
      </nuxt-link>
    </div>
    <input type="checkbox" checked id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{ $t('dashboard.warningTitle') }}</h3>
        <p class="py-4">{{ $t('dashboard.warningContent') }}</p>
        <div class="modal-action">
          <label for="my-modal" class="btn">D'accord</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.program {
  @apply flex bg-cover flex-col justify-center items-center gap-6 px-12 py-24 rounded-lg shadow-xl;
}
</style>