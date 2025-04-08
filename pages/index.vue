<script setup>
useHead({
  title: 'Keycaps Azerty - Les Meilleurs Keycaps pour Clavier Mécanique Français ISO',
  meta: [
    { name: 'description', content: 'Découvrez les meilleurs keycaps Azerty pour personnaliser votre clavier mécanique français ISO. Explorez notre sélection de produits de haute qualité.' },
    { name: 'keywords', content: 'keycaps Azerty, acheter keycaps, accessoires clavier, claviers mécaniques, keycaps pour clavier, keycaps personnalisés, clavier français ISO' },
    { name: 'robots', content: 'index, follow' },  // permet aux moteurs de recherche d'indexer la page
    { name: 'author', content: 'azertycaps.fr' },
    { name: 'og:title', content: 'Keycaps Azerty - Personnalisez votre Clavier Mécanique Français ISO' },
    { name: 'og:description', content: 'Découvrez une sélection de keycaps Azerty pour améliorer votre expérience clavier. Trouvez les meilleurs produits pour votre clavier mécanique français ISO.' },
    { name: 'og:image', content: '/path/to/your/og-image.jpg' }, // Remplace cette URL par celle de ton image d'aperçu
    { name: 'og:url', content: 'https://azertycaps.fr' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Keycaps Azerty - Achetez des Keycaps pour Clavier Mécanique Français ISO' },
    { name: 'twitter:description', content: 'Trouvez des keycaps Azerty de haute qualité pour personnaliser votre clavier mécanique français ISO.' },
    { name: 'twitter:image', content: '/path/to/your/og-image.jpg' } // Remplace cette URL par celle de ton image d'aperçu
  ],
});


const supabase = useSupabaseClient();
const ListClavierData = ref([]);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('claviers')
      .select(`
        *,
        clavier_couleurs (
          *,
          couleurs (*)
        )
      `);

    if (error) {
      throw new Error(error.message);
    }

    ListClavierData.value = data;
  } catch (error) {
    errorMessage.value = error.message;
  }
});

</script>

<template>
  <div>
    
    <app-list-product :ListClavier="ListClavierData" />
  </div>
</template>
