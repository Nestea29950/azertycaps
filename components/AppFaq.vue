<template>
  <section>
    <div
      v-for="(item, index) in faq"
      :key="index"
      class="border-b border-slate-200"
    >
      <button
        @click="toggleAccordion(index)"
        class="w-full flex justify-between items-center py-5 text-primary cursor-pointer"
      >
        <span>{{ item.question }}</span>
        <span
          :id="`icon-${index}`"
          class="text-primary transition-transform duration-300"
          v-html="item.icon"
        ></span>
      </button>
      <div
        :id="`content-${index}`"
        class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div class="pb-5 text-sm text-slate-500">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const plusSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  </svg>
`;

const minusSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
  </svg>
`;

const faq = ref([
  { question: "Qu’est-ce qu’un keycap ISO FR ?", answer: "Les keycaps ISO FR sont des touches de clavier conformes au layout français ISO (AZERTY), idéales pour personnaliser votre clavier mécanique.", icon: plusSVG },
  { question: "Pourquoi choisir des keycaps ISO French pour mon clavier ?", answer: "Ils offrent une compatibilité parfaite avec les claviers AZERTY et permettent de profiter d’un confort de frappe adapté à la disposition française.", icon: plusSVG },
  { question: "Quels matériaux de keycaps ISO FR sont disponibles ?", answer: "Les plus populaires sont le PBT, durable et mat, et l’ABS, lisse et économique. Le PBT est recommandé pour une utilisation longue durée.", icon: plusSVG },
  { question: "Quels profils de keycaps ISO FR choisir : Cherry, OEM, SA ou DSA ?", answer: "Cherry et OEM sont standards et ergonomiques, SA est haut et rétro, DSA est plat et uniforme, idéal pour la frappe rapide.", icon: plusSVG },
  { question: "Les keycaps ISO FR sont-ils compatibles avec tous les claviers mécaniques ?", answer: "Oui, ils fonctionnent avec la plupart des switchs MX (Cherry, Gateron, Kailh…), mais vérifiez la compatibilité avec certains claviers low-profile ou layouts spéciaux.", icon: plusSVG }
]);

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0";
    faq.value[index].icon = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    faq.value[index].icon = minusSVG;
  }
}
</script>
