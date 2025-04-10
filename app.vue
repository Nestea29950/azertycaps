<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.lead p{
  margin: 0.8rem 0rem 0.8rem 0rem;
  font-color: #425466;
}
h2,h3,h4{
  font-weight: 800;
  font-size: 1.5rem;
}

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
