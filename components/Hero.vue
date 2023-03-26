<template>
  <div class="lg:flex gap-6 container mx-auto justify-center">
    <img src="~/assets/logo.png" class="w-80 rounded-lg drop-shadow-xl" />
    <div class="flex flex-col justify-center">
      <p class="text-xl">{{ $t('home.welcome') }}</p>
      <Button link="signup" class="mx-auto my-6" type="primary">{{ $t('links.signup') }}</Button>
    </div>
  </div>
</template>