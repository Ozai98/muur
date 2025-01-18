<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts"></script>
<style>

@font-face {
  font-family: 'Overused-Grotesk';
  src: url('assets/fonts/OverusedGrotesk-Roman.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Overused-Grotesk';
  src: url('assets/fonts/OverusedGrotesk-Medium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ortica-Linear';
  src: url('assets/fonts/OrticaLinear-Bold.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}


html {
  font-size: 16px;
  --eucalipto: #007676;
  --menta-fresca: #e2eeec;
  --no-negro: #161216;
  --no-negro-80-porciento: #161216cc;
  background-color: var(--no-negro);
  max-width: 100vw;
  background-size: 8rem;
  background-repeat: repeat;
}

* {
  margin: 0;
  font-family: 'Overused-Grotesk', sans-serif;
  color: var(--menta-fresca);
}

h1 {
  font-family: 'Ortica-Linear', serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.04rem;
}
h2 {
  font-family: 'Overused-Grotesk', sans-serif;
  font-size: 1.375rem;
  font-weight: 400;
  letter-spacing: 0.04rem;
}
p {
  font-family: 'Overused-Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.main-button {
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
.raw-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.sub-text {
  font-size: 13px;
}
.web-wrapper {
  margin: 2rem;
}
</style>
