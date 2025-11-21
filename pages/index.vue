<script setup>
useHead({
  title: 'Keycaps ISO FR : Sélection de Keycaps AZERTY pour Clavier Mécanique',
  meta: [
    { name: 'description', content: 'Découvrez les meilleurs keycaps ISO FR (AZERTY) pour claviers mécaniques. Sélection recommandée, comparatifs et modèles AliExpress de qualité au meilleur prix.' },
        { name: 'robots', content: 'index, follow' } // <-- Ici, indexation globale
 
  ]
});

const supabase = useSupabaseClient();
const errorMessage = ref('');

const { data, error } = await useAsyncData('claviersData', async () => {
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

    return data;
  } catch (error) {
    errorMessage.value = error.message;
    return [];  // Retourner un tableau vide si une erreur se produit
  }
});
</script>

<template>
  <div>
    <!-- Passe 'data' directement à la prop 'ListClavier' -->
    <app-list-product :ListClavier="data" />
    <AppFaq/>
  </div>
</template>
