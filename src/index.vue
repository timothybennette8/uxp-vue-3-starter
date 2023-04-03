<script setup>
import ShowObjects from "./components/ShowObjects/index.vue"
import { storeToRefs } from 'pinia';
const { openProgrammaticDialog } = require("./composables/useModal.js")

const handleClick = async () => {
  await openProgrammaticDialog("settings")
}


</script>

<template>
  <div id="main" class="p-2">
    <sp-heading size="s">Vue 3 Starter</sp-heading>

    <ShowObjects />
  </div>
</template>

<style scoped></style>