<script setup>
const email = ref('')
const password = ref('')

function onKeyUp (event) {
  const isSpaceKey = event.code === 'Space'
  if (isSpaceKey) {
    event.preventDefault()
    email.value = 'marine.l@gmail.com'
    password.value = '123456'
  }
}
</script>

<template>
  <div class="grid mx-auto max-w-md" @keyup="onKeyUp">
    <h1 class="text-4xl font-bold">{{ $t('login.title') }}</h1>
    <p class="text-xl my-4">{{ $t('login.subtitle') }}</p>
    <form class="flex flex-col gap-6">
      <input type="text" :placeholder="$t('signup.email')" v-model="email" />
      <input type="password" :placeholder="$t('signup.password')" v-model="password" />
      <div class="flex">
        <Button type="ghost" link="/" class="mr-auto">
          <nuxt-icon name="arrow-left" filled />
          {{ $t('common.returnHome') }}
        </Button>
        <Button class="mr-auto" type="primary">{{ $t('login.submit') }}</Button>
      </div>
    </form>
  </div>
</template>