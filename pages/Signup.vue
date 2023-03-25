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
    <h1 class="text-4xl font-bold">{{ $t('signup.title') }}</h1>
    <p class="text-xl my-4">{{ $t('signup.subtitle') }}</p>
    <form class="flex flex-col gap-6">
      <input type="text" :placeholder="$t('signup.email')" v-model="email" />
      <input type="password" :placeholder="$t('signup.password')" v-model="password" />
      <input type="password" :placeholder="$t('signup.passwordConfirm')" v-model="passwordConfirm" />
      <div class="flex">
        <Button style="neutral" link="/" class="mr-auto">
          <nuxt-icon name="arrow-left" filled />
          {{ $t('common.returnHome') }}
        </Button>
        <Button class="mr-auto">{{ $t('signup.submit') }}</Button>
      </div>
    </form>
  </div>
</template>