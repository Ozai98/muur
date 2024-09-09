<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  font-size: 16px;
  --eucalipto: #007676;
  --menta-fresca: #e2eeec;
  --no-negro: #161216;
  background-color: var(--no-negro);
  max-width: 100vw;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 15px;
  border: 1px solid var(--menta-fresca);
  border-radius: 1.125rem;
  color: var(--eucalipto);
  background-color: white;
  cursor: pointer;
  max-width: 100%;
}
button:hover {
  background-color: var(--menta-fresca);
}

.circular-button {
  border-radius: 100%;
  width: 2rem;
}
.sub-text {
  font-size: 13px;
}
.web-wrapper {
  margin: 2rem;
}
</style>
