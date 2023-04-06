<script setup>
import { ref } from "vue"
import Select from "../../components/Select/index.vue"
const { app } = require("photoshop")
const doc = app.activeDocument;

const documentObjects = ["Layers", "Channels"]

const selected = ref()

const handleListen = (e) => {
  selected.value = e
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Select v-model="selected" :items="documentObjects" label="Choose objects" @update:model-value="handleListen" />
    <sp-heading size="s">{{ selected }}</sp-heading>

    <ul v-if="documentObjects.includes(selected)">
      <li v-for="item of doc[selected.toLowerCase()]" :key="item">
        <sp-label v-if="selected === 'Layers'">✨</sp-label>
        <sp-label v-else>🏳️‍🌈</sp-label>
        <sp-label>{{ item.name }}</sp-label>
      </li>
    </ul>


  </div>
</template>

<style scoped></style>