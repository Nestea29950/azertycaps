<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.lead p , li{
  margin: 0.8rem 0rem 0.8rem 0rem;
  color: #1E2939;
}

h2 {
  font-weight: 800;
  color: #1E2939;
  font-size: 1.75rem; 
  margin-top: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-weight: 800;
  color: #1E2939;
  font-size: 1.375rem; 
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

h4 {
  font-weight: 800;
  color: #1E2939;
  font-size: 1.125rem; 
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.lead a {
  text-decoration: underline;
}

.lead h2 > a,
.lead h3 > a,
.lead h4 > a {
  text-decoration: none;
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
