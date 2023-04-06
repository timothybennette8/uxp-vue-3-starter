<script setup>
import ShowObjects from "./components/ShowObjects/index.vue"
const enums = ["1", "2", "3", "4"];
</script>

<template>
  <div id="main" class="p-2">
    <sp-heading size="m">Vue 3 Starter</sp-heading>
    <div class="bg-green-500 h-[20px]">Green Text</div>
    <div class="text-green-500 h-[20px]">Green Background</div>
    <div class="flex flex-row gap-4">
      <div v-for="num of enums" class="w-[30px] h-[30px] border-2">{{ num }}</div>
    </div>

    <ShowObjects />
  </div>
</template>

<style scoped></style>