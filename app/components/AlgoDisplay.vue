<template>
  <span class="result">
    <slot />
  </span>
</template>

<style scoped>
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  text-wrap: pretty;
  text-align: center;
  padding: 0 1em;
  font-size: 1.5em;
}
</style>
