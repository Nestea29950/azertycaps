<script setup lang="ts">
const route = useRoute();


useSeoMeta({
  title: 'FAQ - Tout savoir sur les keycaps et accessoires pour claviers Azerty | AzertyCaps.fr',
  description: 'Consultez notre FAQ pour obtenir toutes les réponses sur les keycaps, accessoires de clavier et conseils pour personnaliser votre clavier Azerty. AzertyCaps.fr vous guide.',
  ogTitle: 'FAQ - Keycaps et accessoires pour claviers Azerty | AzertyCaps.fr',
  ogDescription: 'Découvrez notre FAQ complète sur les keycaps et accessoires pour claviers Azerty. Réponses aux questions fréquentes, conseils d’achat et astuces de personnalisation.',
  ogUrl: 'https://azertycaps.fr/faq',
})



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
  { question: "Qu’est-ce qu’un keycap ISO FR ?", answer: "Les keycaps ISO FR sont des touches de clavier conformes au layout français ISO, compatibles avec les claviers AZERTY. Ils remplacent les touches standard pour personnaliser votre clavier mécanique.", icon: plusSVG },
  { question: "Quelle est la différence entre ISO FR et ANSI ?", answer: "ISO FR a une touche 'Entrée' plus grande et une disposition différente de la touche 'Shift' gauche. ANSI est le layout US standard avec une entrée plus petite.", icon: plusSVG },
  { question: "Quels matériaux de keycaps choisir : PBT ou ABS ?", answer: "Le PBT est durable, résistant à l’usure et mat. L’ABS est plus lisse, moins cher, mais peut briller avec le temps. Pour une utilisation longue durée, le PBT est recommandé.", icon: plusSVG },
  { question: "Quels profils de keycaps existent : Cherry, OEM, SA, DSA ?", answer: "Cherry : bas et ergonomique. OEM : standard, légèrement plus haut. SA : haut, arrondi et rétro. DSA : plat et uniforme, idéal pour la frappe rapide.", icon: plusSVG },
  { question: "Les keycaps ISO FR sont-ils compatibles avec tous les switchs ?", answer: "Oui, tant qu’ils utilisent des switchs MX (Cherry, Gateron, Kailh…), mais vérifiez la compatibilité avec les layouts spéciaux ou les claviers low-profile.", icon: plusSVG },
  { question: "Peut-on utiliser les keycaps ISO FR avec un clavier RGB ?", answer: "Oui, si elles sont shine-through ou translucides. Les keycaps en PBT opaque peuvent bloquer la lumière du RGB.", icon: plusSVG },
  { question: "Comment nettoyer et entretenir ses keycaps ?", answer: "Retirez les touches avec un keycap puller, lavez-les à l’eau tiède savonneuse et laissez-les sécher complètement avant de les remettre. Évitez l’eau chaude ou le lave-vaisselle.", icon: plusSVG },
  { question: "Où acheter des keycaps ISO FR de qualité ?", answer: "Les keycaps ISO FR sont disponibles sur des sites comme Amazon, AliExpress, et des boutiques spécialisées en accessoires pour claviers mécaniques.", icon: plusSVG },
  { question: "Pourquoi choisir un profil de keycap spécifique ?", answer: "Chaque profil influence l’ergonomie et le confort de frappe. Cherry et DSA sont souvent utilisés pour la frappe rapide, SA pour le look rétro et OEM pour un usage standard.", icon: plusSVG },
  { question: "Comment savoir si mes touches sont compatibles avec mon clavier AZERTY ?", answer: "Vérifiez le layout ISO FR et le type de switch. La plupart des keycaps MX sont compatibles, mais certains claviers low-profile ou avec layout atypique peuvent nécessiter des keycaps spécifiques.", icon: plusSVG },
  { question: "Existe-t-il des keycaps personnalisés pour ISO FR ?", answer: "Oui, il existe des sets artisanaux et personnalisés avec des couleurs, motifs et matériaux variés pour rendre votre clavier unique.", icon: plusSVG },
  { question: "Quelle est la durée de vie moyenne d’un keycap PBT ?", answer: "Les keycaps PBT peuvent durer plusieurs années sans s’user ou briller, surtout avec un entretien régulier.", icon: plusSVG }
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





