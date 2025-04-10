<script setup>
const props = defineProps({
  ListClavier: {
    type: Array,
    required: true,
  },
});

let filterModal = ref(false);

function closeModalFilter() {
  filterModal.value = false;
}

const allCouleurs = computed(() => {
  // Récupère tous les objets "couleurs" (via clavier_couleurs)
  const couleurs = props.ListClavier.flatMap(clavier =>
    clavier.clavier_couleurs.map(cc => cc.couleurs)
  );

  // Supprime les doublons sur l'ID ou le code
  const seen = new Set();
  const unique = [];

  for (const couleur of couleurs) {
    const key = couleur.id; // ou couleur.code si les ID ne sont pas uniques
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(couleur);
    }
  }

  return unique;
});



const selectedCouleurs = ref([]);


const minPrice = ref(0);
const maxPrice = ref(0);

// Valeurs minimales et maximales de prix calculées en fonction des données
const minPriceValue = computed(() => {
  return Math.min(...props.ListClavier.map((clavier) => clavier.prix));
});

const maxPriceValue = computed(() => {
  return Math.max(...props.ListClavier.map((clavier) => clavier.prix));
});

// Mise à jour des valeurs min et max lorsque les valeurs calculées changent
watch(
  [minPriceValue, maxPriceValue],
  () => {
    minPrice.value = minPriceValue.value;
    maxPrice.value = maxPriceValue.value;
  },
  { immediate: true }
);

// Liste unique des hauteurs, matériaux, formats
const uniqueHauteurs = computed(() => {
  return [...new Set(props.ListClavier.map((clavier) => clavier.hauteur))];
});

const uniqueMateriaux = computed(() => {
  return [...new Set(props.ListClavier.map((clavier) => clavier.materiaux))];
});

const uniqueFormats = computed(() => {
  return [...new Set(props.ListClavier.map((clavier) => clavier.format))];
});

// Liste filtrée en fonction des prix et des critères sélectionnés
// Liste filtrée en fonction des prix, des hauteurs, des matériaux, des formats et des couleurs sélectionnées
const filteredList = computed(() => {
  return props.ListClavier.filter((clavier) => {
    const isWithinPrice =
      clavier.prix >= minPrice.value && clavier.prix <= maxPrice.value;

    // Vérifie si une hauteur est sélectionnée et si elle correspond à celle du clavier
    const isHeightSelected =
      selectedHauteurs.value.length === 0 ||
      selectedHauteurs.value.includes(clavier.hauteur);

    // Vérifie si un matériau est sélectionné et si il correspond à celui du clavier
    const isMateriauxSelected =
      selectedMateriaux.value.length === 0 ||
      selectedMateriaux.value.includes(clavier.materiaux);

    // Vérifie si un format est sélectionné et si il correspond à celui du clavier
    const isFormatSelected =
      selectedFormats.value.length === 0 ||
      selectedFormats.value.includes(clavier.format);

    // Vérifie si les couleurs sélectionnées sont associées à ce clavier
    const hasSelectedCouleur =
      selectedCouleurs.value.length === 0 ||
      clavier.clavier_couleurs.some(cc =>
        selectedCouleurs.value.includes(cc.couleurs.id) // on compare par ID ou autre attribut unique
      );

    return (
      isWithinPrice &&
      isHeightSelected &&
      isMateriauxSelected &&
      isFormatSelected &&
      hasSelectedCouleur // ajout du filtre pour les couleurs
    );
  });
});


// Liste des hauteurs, matériaux, formats sélectionnés par l'utilisateur
const selectedHauteurs = ref([]);
const selectedMateriaux = ref([]);
const selectedFormats = ref([]);
</script>
<template>
  <section class="py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <!-- Heading & Filters -->
      <div
        class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8"
      >
        <div>
          <h1
            class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl"
          >
            Keycaps français
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <button
            data-modal-toggle="filterModal"
            @click="filterModal = true"
            data-modal-target="filterModal"
            type="button"
            class="cursor-pointer flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
          >
            <svg
              class="-ms-0.5 me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
              />
            </svg>
            Filtres
            <svg
              class="-me-0.5 ms-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>
          
  
        </div>
      </div>
      <div
        class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="clavier in filteredList"
          :key="clavier.id"
          class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="h-56 w-full justify-center flex items-center">
            <a :href="clavier.url" aria-label="Lien vers le clavier">
              <img class="" :src="clavier.image_url" alt="" />
            </a>
          </div>
          <div class="pt-4">
            <a
              :href="clavier.url"
              class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white fancy-link" aria-label="Lien vers le clavier"
              >{{ clavier.nom }}</a
            >

            <div class="mt-2 flex items-center gap-2">
              <AppStarRating :rating="clavier.etoiles" />

              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ clavier.etoiles }}
              </p>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                {{ clavier.avis }} avis
              </p>
            </div>

            <ul class="mt-2 flex items-center gap-4">
              <li class="flex items-center gap-1">
                <svg
                  class="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.07141 14v6h5.99999v-6H4.07141Zm4.5-4h6.99999l-3.5-6-3.49999 6Zm7.99999 10c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5Z"
                  />
                </svg>

                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {{ clavier.hauteur }}
                </p>
              </li>

              <li class="flex items-center gap-1">
                <svg
                  class="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z"
                  />
                </svg>

                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {{ clavier.materiaux }}
                </p>
              </li>

              <li class="flex items-center gap-1">
                <svg
                  class="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M8 15h7.01v.01H15L8 15Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M20 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="square"
                    stroke-width="2"
                    d="M6 9h.01v.01H6V9Zm0 3h.01v.01H6V12Zm0 3h.01v.01H6V15Zm3-6h.01v.01H9V9Zm0 3h.01v.01H9V12Zm3-3h.01v.01H12V9Zm0 3h.01v.01H12V12Zm3 0h.01v.01H15V12Zm3 0h.01v.01H18V12Zm0 3h.01v.01H18V15Zm-3-6h.01v.01H15V9Zm3 0h.01v.01H18V9Z"
                  />
                </svg>

                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {{ clavier.format }}
                </p>
              </li>
            </ul>

            <div class="mt-4 flex items-center justify-between gap-4">
              <p
                class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white"
              >
                {{ clavier.prix }} €
              </p>

              <a
                :href="clavier.url" aria-label="Lien vers le clavier"
                type="button"
                class="cursor-pointer inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-slate-600 hover:bg-white hover:text-slate-500 border hover:border-slate-500 dark:bg-primary-600 dark:hover:bg-primary-700"
              >
                <svg
                  class="-ms-2 me-2 h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Acheter
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="w-full text-center">
        <button
          type="button"
          class="cursor-pointer rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          En voir plus
        </button>
      </div> -->
    </div>

    <form
      id="filterModal"
      v-if="filterModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed left-0 right-0 top-0 z-50 h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
    >
      <div class="relative h-full w-full md:h-auto">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
          <!-- Modal header -->
          <div class="flex items-start justify-between rounded-t p-4 md:p-5">
            <button
              @click="closeModalFilter()"
              type="button"
              class="cursor-pointer ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="filterModal"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="px-4 md:px-5">
            <div
              class="space-y-4"
              id="advanced-filters"
              role="tabpanel"
              aria-labelledby="advanced-filters-tab"
            >
              <div class="grid grid-cols-1 gap-8">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      for="min-price"
                      class="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Prix min
                    </label>
                    <input
                      type="number"
                      id="min-price-input"
                      v-model="minPrice"
                      :min="minPriceValue"
                      :max="maxPriceValue"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="max-price"
                      class="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Prix Max
                    </label>
                    <input
                      type="number"
                      id="max-price-input"
                      v-model="maxPrice"
                      :min="minPriceValue"
                      :max="maxPriceValue"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <h6
                    class="mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Hauteur
                  </h6>
                  <div
                    class="flex items-center"
                    v-for="hauteur in uniqueHauteurs"
                    :key="hauteur"
                  >
                    <input
                      v-model="selectedHauteurs"
                      type="checkbox"
                      :value="hauteur"
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {{ hauteur }}
                    </label>
                  </div>
                </div>

                <div>
                  <h6
                    class="mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Matériaux
                  </h6>
                  <div
                    class="flex items-center"
                    v-for="materiaux in uniqueMateriaux"
                    :key="materiaux"
                  >
                    <input
                      v-model="selectedMateriaux"
                      type="checkbox"
                      :value="materiaux"
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {{ materiaux }}
                    </label>
                  </div>
                </div>

                <div>
                  <h6
                    class="mb-2 text-sm font-medium text-black dark:text-white"
                  >
                    Format
                  </h6>
                  <div
                    class="flex items-center"
                    v-for="format in uniqueFormats"
                    :key="format"
                  >
                    <input
                      v-model="selectedFormats"
                      type="checkbox"
                      :value="format"
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {{ format }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
                <h6 class="my-2 text-sm font-medium text-black dark:text-white">Couleurs</h6>
                <div class="space-y-2">
                  
                  <div
                    class="flex items-center"
                    v-for="couleur in allCouleurs"
                    :key="couleur.id"
                  >
                    <input
                      type="checkbox"
                      :id="'color-' + couleur.id"
                      v-model="selectedCouleurs"
                      :value="couleur.id"
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      :for="'color-' + couleur.id"
                      class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div
                        class="mr-2 h-3.5 w-3.5 rounded-full"
                        :style="{ backgroundColor: couleur.code_hex }"
                      ></div>
                      {{ couleur.nom}}
                    </label>
                  </div>
                </div>


              </div>
          </div>

          <!-- Modal footer -->
          <div
            class="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5"
          ></div>
        </div>
      </div>
    </form>
  </section>
</template>
