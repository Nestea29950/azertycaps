<script setup>

const supabase = useSupabaseClient();

const ListClavierData = ref([]);
const errorMessage = ref('');

onMounted(async () => {
  try {
    const { data, error } = await supabase
      .from('claviers')
      .select('*');
   
    if (error) {
      throw new Error(error.message);
    }

    ListClavierData.value = data;
  } catch (error) {
    errorMessage.value = error.message; // Sauvegarde du message d'erreur
  }
});
</script>

<template>
  <div>
    
    <app-list-product :ListClavier="ListClavierData" />
  </div>
</template>
