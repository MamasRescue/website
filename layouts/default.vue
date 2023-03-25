<template>
  <div class="prose lg:prose-xl flex flex-col gap-12 min-h-screen bg-gradient-to-tr from-primary-200 to-secondary-200">
    <Header />
    <div class="grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>