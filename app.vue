<template>
  <div>
    <NavBar />
    <div class="web-wrapper">
      <NuxtPage />
    </div>
    <FooterComponent />
  </div>
</template>
<script setup lang="ts"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  font-size: 16px;
  --eucalipto: #007676;
  --menta-fresca: #e2eeec;
  max-width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url('../muur/static/images/tile1.png');
  background-size: 8rem;
  background-repeat: repeat;
}

* {
  margin: 0;
  font-family: 'Atkinson Hyperlegible', sans-serif;
}

h1 {
  font-size: 2.5625rem;
  font-weight: 700;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
}
p {
  font-size: 1rem;
  font-weight: 400;
}

button {
  border: 1px solid var(--menta-fresca);
  color: var(--eucalipto);
  cursor: pointer;
  background-color: white;
}
button:hover {
  background-color: var(--menta-fresca);
}

.circular-button {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
.sub-text {
  font-size: 13px;
}
.web-wrapper {
  margin: 1rem;
}
</style>
