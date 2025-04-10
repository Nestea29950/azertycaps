<script setup>
useHead({
  title: 'Keycaps Azerty - Les Meilleurs Keycaps pour Clavier Mécanique Français ISO',
  meta: [
    { name: 'description', content: 'Découvrez les meilleurs keycaps Azerty pour personnaliser votre clavier mécanique français ISO. Meilleurs références de clavier iso français' },
    { name: 'keywords', content: 'keycaps Azerty, claviers mécaniques, keycaps pour clavier, keycaps personnalisés, clavier français ISO' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'azertycaps.fr' },
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
  </div>
</template>
