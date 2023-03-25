<script setup>
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

function onKeyUp (event) {
  const isSpaceKey = event.code === 'Space'
  if (isSpaceKey) {
    event.preventDefault()
    email.value = 'marine.l@gmail.com'
    password.value = '123456'
    passwordConfirm.value = '123456'
  }
}
</script>

<template>
  <div class="grid mx-auto max-w-md" @keyup="onKeyUp">
    <h1>{{ $t('signup.title') }}</h1>
    <h2>{{ $t('signup.subtitle') }}</h2>
    <form class="flex flex-col gap-6">
      <input type="text" :placeholder="$t('signup.email')" v-model="email" />
      <input type="password" :placeholder="$t('signup.password')" v-model="password" />
      <input type="password" :placeholder="$t('signup.passwordConfirm')" v-model="passwordConfirm" />
      <div class="flex">
        <Button type="ghost" link="/" class="mr-auto">
          <nuxt-icon name="arrow-left" filled />
          {{ $t('common.returnHome') }}
        </Button>
        <Button class="mr-auto" link="/services" type="primary">{{ $t('signup.submit') }}</Button>
      </div>
    </form>
  </div>
</template>