<script setup lang="ts">


const menuVisible = ref(false)
const activeSubmenu = ref<number | null>(null)

// Exemple de structure de menu (au cas où tu en ajoutes plus tard)
const menuItems = ref([
  { label: 'Blog', link: '/blog'},
])

// ✅ Ouvre/ferme le menu mobile
function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

// ✅ Ouvre/ferme un sous-menu
function toggleSubmenu(index: number) {
  activeSubmenu.value = activeSubmenu.value === index ? null : index
}

// ✅ Ferme les sous-menus si clic à l’extérieur
function handleClickOutside(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.has-children')) {
    activeSubmenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header class="pb-18 lg:pb-17">
    <nav class="bg-white fixed w-full z-20 top-0 start-0 " >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse  lg:flex-1 ">
          <img
            src="../assets/images/logo.svg"
            class="w-18"
            alt="logo portfolio developpeur fullstack"
          />
        </a>

        <!-- Bouton "Nous contacter" + Burger -->
        <div class="flex justify-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:flex-1">
          <a
            href="/contact"
            class="btn-primary px-4 py-2"
          >
          Me contacter
          </a>

          <!-- Burger -->
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center w-10 h-10 justify-center text-sm md:hidden text-primary focus:outline-none"
            aria-controls="navbar-cta"
            :aria-expanded="menuVisible"
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#000000"
              stroke-width=".6"
              fill="none"
              stroke-linecap="round"
              style="cursor: pointer"
            >
              <path v-if="!menuVisible" d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" />
              <path v-else d="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" />
            </svg>
          </button>
        </div>

        <!-- Menu principal -->
        <div
          id="navbar-cta"
          :class="[
          'lg:flex-1 flex items-center justify-around w-full md:flex md:w-auto md:order-1 transition-all duration-300',
          menuVisible ? 'block' : 'hidden md:block'
        ]"

        >
          <ul
            class="h-svh md:h-auto flex flex-col mt-4 font-medium relative md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
          >
            <li class="relative" v-for="(item, index) in menuItems" :key="index">
              <a
                :href="item.link "
                class="flex items-center py-2 md:px-3 text-primary md:bg-transparent md:p-0 text-2xl md:text-base hover:underline"
                
                :class="{ 'has-children': item.children }"
              >
                {{ item.label }}
                <svg
                  v-if="item.children"
                  class="w-4 h-4 ml-2 transition-transform"
                  :class="{ 'rotate-180': activeSubmenu === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>

              <!-- Sous-menu -->
              <ul
                v-if="item.children"
                :class="[
                  'ml-4 mt-2 space-y-2 md:absolute md:ml-0 md:mt-0 md:bg-white md:shadow-md md:rounded-lg md:p-2',
                  { hidden: activeSubmenu !== index },
                ]"
              >
                <li v-for="(child, i) in item.children" :key="i">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">{{ child }}</a>
                </li>
              </ul>
            </li>

            <!-- Bouton contact pour mobile -->
            <a
              href="/contact"
              class="absolute md:hidden left-0 bottom-24 flex justify-center w-full text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none font-medium text-sm px-4 py-3 text-center cursor-pointer"
            >
              Nous contacter
            </a>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

.rotate-180 {
  transform: rotate(180deg);
}
</style>
