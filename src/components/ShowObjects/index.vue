<script setup>
import { ref } from "vue"
import Select from "../../components/Select/index.vue"
const { app } = require("photoshop")
const doc = app.activeDocument;

const enums = ["Layers", "Channels"]

const selected = ref()

const handleListen = (e) => {
  console.log("HII", e)
}

</script>

<template>
  <div class="flex flex-col gap-2">
    <Select v-model="enums" :selected="selected" @update:model-value="handleListen" />
    <div class="flex flex-row flex-wrap gap-4 justify-start">
      <sp-button size="s" v-for="el of enums" class="m-2">{{ el }}</sp-button>
    </div>
    <ul>
      <li v-for="layer of doc.layers">
        <sp-label>{{ layer.name }}</sp-label>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>