<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="px-4"/>
    </NuxtLayout>
  </div>
</template>

<style>


.fancy-link {
  text-decoration: none;
  background-image: linear-gradient(black);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 3px;
  transition: background-size 500ms ease-in-out;

}

.fancy-link:hover {
  background-size: 100% 3px;
  color: inherit;
}

</style>
