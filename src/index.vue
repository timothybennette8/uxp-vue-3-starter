<script setup>
import ShowObjects from "./components/ShowObjects/index.vue"

</script>

<template>
  <div id="main" class="p-2">
    <sp-heading size="m">Vue 3 Starter</sp-heading>
    <div class="text-6xl bg-green-500 h-[20px]">Green Text</div>
    <div class="text-green-500 h-[20px]">Green Background</div>

    <ShowObjects />
  </div>
</template>

<style scoped></style>