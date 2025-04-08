<template>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contactez-nous</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tu as reperé un clavier sympa sur Amazon, AliExpress ou ailleurs ? Aide la communauté en nous envoyant le lien. On l'ajoutera peut-être au catalogue après vérification ! 💻</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre e-mail</label>
              <input v-model="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="exemple@gmail.com" required>
          </div>
          <div>
              <label for="lien" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lien</label>
              <input v-model="lien" type="text" id="lien" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://www.amazon.com" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
              <textarea v-model="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pourquoi tu nous le partage ?"></textarea>
          </div>
          <button @click="sendMessage()" type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Envoyer</button>
      </form>
  </div>
</section>
</template>

<script setup>
let email = ref('');
let lien = ref('');
let message = ref('');
const sent = ref(false)

const sendMessage = async () => {
  await $fetch('/api/contact', {
    method: 'POST',
    body: { email: email.value, lien: lien.value, message: message.value }
  })
  sent.value = true
  nom.value = ''
  email.value = ''
  message.value = ''
}
</script>