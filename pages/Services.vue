<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2 class="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Hello Marine!</h2>
        <p class="max-w-screen-md  md:text-lg text-center mx-auto">Mamas Rescue souhaite vous accompagner de la manière la plus efficace qui soit grâce aux réponses que vous aurez fournis lors du questionnaire, vous proposant ainsi un programme sur mesure, prenant en concidération la nana que VOUS êtes!</p>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
        <div class="flex bg-secondary-100 border border-secondary-700 rounded-lg divide-x">
          <div class="flex items-center text-secondary-500 p-2 md:p-4"><span class="w-6 md:w-8 h-6 md:h-8"><svg class="w-6 md:w-8 h-6 md:h-8"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg></span></div>
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold mb-2">Questionnaire</h3>
            <p class="">Le questionnaire permet la conception des programmes, mais également la détection des prémices des pathologies liées au post-partum.</p>
          </div>
        </div>
        <div class="flex bg-secondary-100 border border-secondary-700 rounded-lg divide-x">
          <div class="flex items-center text-secondary-500 p-2 md:p-4"><span class="w-6 md:w-8 h-6 md:h-8"><svg class="w-6 md:w-8 h-6 md:h-8"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg></span></div>
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold mb-2">Security</h3>
            <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a
              real written text.</p>
          </div>
        </div>
        <div class="flex bg-secondary-100 border border-secondary-700 rounded-lg divide-x">
          <div class="flex items-center text-secondary-500 p-2 md:p-4"><span class="w-6 md:w-8 h-6 md:h-8"><svg class="w-6 md:w-8 h-6 md:h-8"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg></span></div>
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
            <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a
              real written text.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container px-6 py-8 mx-auto">
        <div class="xl:items-center xl:-mx-8 xl:flex">
          <div class="flex flex-col items-center xl:items-start xl:mx-8">
            <h1 class="text-3xl font-medium text-gray-800 capitalize lg:text-4xl ">Nos offres:</h1>
            <div class="mt-4">
              <div class="inline-block w-40 h-1 rounded-full bg-primary-500"></div>
              <div class="inline-block w-3 h-1 mx-1 rounded-full bg-primary-500"></div>
              <div class="inline-block w-1 h-1 rounded-full bg-primary-500"></div>
            </div>
            <p class="mt-4 font-medium "> Choisissez votre offre pour accéder a la personnalisation </p><a
              class="flex items-center mt-4 -mx-1 text-sm capitalize hover:underline " href="#"><span class="mx-1">Plus d'info</span><span
                class="w-4 h-4 mx-1 rtl:-scale-x-100"><svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg></span></a>
          </div>
          <div class="flex-1 xl:mx-8">
            <div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
              <div class="max-w-sm mx-auto border border-secondary-700 rounded-lg md:mx-4 bg-secondary-100 ">
                <div class="p-6">
                  <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-3xl">Post-partum immédiat</h1>
                  <p class="mt-4"> Suivis et accompagment du jour 1 aux 6 semaines de bébé.
                  </p>
                  <h2 class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"><span class=""> </span><span
                      class="text-base font-medium"></span></h2>
                  <p class="mt-1"></p>
                  <Button link="questionnaire" type="primary">{{ $t('common.choose') }}</Button>
                </div>
                <hr class="border-gray-800 " />
                <div class="p-6">
                  <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl">Détails:</h1>
                  <div class="mt-8 space-y-4">
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Programme sur mesure</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Annuaire de lieux et personnes ressource</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Application mobile</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Journal de bord avec suivis de santé</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-red-400"><svg class="w-5 h-5 text-red-400"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Chat</span></div>
                  </div>
                </div>
              </div>
              <div class="max-w-sm mx-auto border border-secondary-700 rounded-lg md:mx-4 bg-secondary-100">
                <div class="p-6">
                  <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-3xl">Post-partum longue durée</h1>
                  <p class="mt-4 text-gray-500"> Suivis et accompagment du jour 1 aux 2 ans de bébé.
                  </p>
                  <h2 class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"><span class=""></span><span class="text-base font-medium"></span></h2>
                  <p class="mt-1 text-gray-500"></p>
                  <Button link="questionnaire" type="primary">{{ $t('common.choose') }}</Button>
                </div>
                <hr class="border-gray-800 " />
                <div class="p-6">
                  <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl">Détails:</h1>
                  <div class="mt-8 space-y-4">
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Programme sur mesure</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Annuaire de lieux et personnes ressource</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Application mobile</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Journal de bord avec suivis de santé</span></div>
                    <div class="flex items-center"><span class="w-5 h-5 text-primary-500"><svg class="w-5 h-5 text-primary-500"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg></span><span class="mx-4 text-gray-700">Chat</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>