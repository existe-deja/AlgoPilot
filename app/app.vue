<template>
  <div
    id="app"
    :style="{ backgroundColor: backgroundColor }"
    class="min-h-screen flex items-center justify-center"
    @click="handleClick"
  >
    <AlgoDisplay>
      {{ display }}
    </AlgoDisplay>
  </div>
</template>

<script setup>
const { backgroundColor, generateNewColor } = useColorGenerator()
const { display, takeDecision } = useTakeDecision()

const handleClick = () => {
  generateNewColor()
  takeDecision()
}
</script>

<style>
html,
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
}
</style>
