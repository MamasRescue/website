<script setup>
const questions = [
  {
    label: "questionFeel",
    options: [
      { label: 'questionFeelAnswer1', value: 5 },
      { label: 'questionFeelAnswer2', value: 4 },
      { label: 'questionFeelAnswer3', value: 3 },
      { label: 'questionFeelAnswer4', value: 2 },
      { label: 'questionFeelAnswer5', value: 1 },
    ],
  },
  {
    label: "questionSleep",
    options: [
      { label: 'questionSleepAnswer1', value: 1 },
      { label: 'questionSleepAnswer2', value: 0 },
    ],
  },
  {
    label: "questionTired",
    options: [
      { label: 'questionTiredAnswer1', value: 2 },
      { label: 'questionTiredAnswer2', value: 1 },
      { label: 'questionTiredAnswer3', value: 0 },
    ],
  },
]
const currentIndex = ref(0)
const currentQuestion = computed(() => questions[currentIndex.value])
const canGoNext = ref(false)

function onChange () {
  canGoNext.value = true
}

function goNext () {
  if (canGoNext.value) {
    currentIndex.value++
    canGoNext.value = false
  }
}
</script>

<template>
  <div class="container mx-auto max-w-lg">
    <h1>{{ $t('questionnaire.title') }}</h1>
    <p>{{ $t('questionnaire.subtitle') }}</p>
    <p>{{ $t(`questionnaire.${currentQuestion.label}`) }}</p>
    <ul>
      <li v-for="option in currentQuestion.options" :key="option.label">
        <label class="flex w-fit p-2 items-center gap-3 cursor-pointer hover:bg-white/20 transition-colors rounded-md mr-auto">
          <input type="radio" @change="onChange" :name="`radio-${currentIndex}`" class="radio radio-primary" />
          {{ $t(`questionnaire.${option.label}`) }}
        </label>
      </li>
    </ul>
    <Button v-if="currentIndex < questions.length - 1" class="mx-auto my-6" @click="goNext" :disabled="!canGoNext" type="primary">{{
      $t('common.validate') }}</Button>
    <Button v-else class="mx-auto my-6" link="dashboard" type="primary">{{ $t('common.seeResults') }}</Button>
  </div>
</template>