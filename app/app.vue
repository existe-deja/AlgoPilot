<template>
  <div id="app" class="min-h-screen flex items-center justify-center" @click="handleClick">
    <AlgoLoader v-if="isLoading" />

    <AlgoDisplay v-else>
      {{ decisionDisplay }}
    </AlgoDisplay>
  </div>
</template>

<script setup>
const { decisionDisplay, isLoading, takeDecision } = useTakeDecision()

const handleClick = async () => {
  await takeDecision()
}
</script>

<style>
:root {
  --dark: #1b1b1b;
  --light: #f8f9fa;
}

html,
body {
  font-family: Figtree, sans-serif;
  margin: 0;
  padding: 0;
  background: var(--light);
  color: var(--dark);
}

@media (prefers-color-scheme: dark) {

  html,
  body {
    background: var(--dark);
    color: var(--light);
  }
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
}
</style>
