<script setup>
import { ref } from "vue"
import Select from "../../components/Select/index.vue"
const { app } = require("photoshop")
const doc = app.activeDocument;

// Variables for Select component
const documentObjects = ["Layers", "Channels"]
const selected = ref()

/**
 * Receives emitted value from Select component and applies to selected ref
 * @param {*} e the model update event 
 */
const handleListen = (e) => {
  selected.value = e
}
</script>

<template>
  <div class="col">
    <Select v-model="selected" :items="documentObjects" label="Choose objects" @update:model-value="handleListen" />
    <sp-heading size="s">{{ selected }}</sp-heading>

    <ul v-if="documentObjects.includes(selected)">
      <li v-for="item of doc[selected.toLowerCase()]" :key="item">
        <sp-label>{{ selected === "Layers" ? '✨' : '🏳️‍🌈' }}</sp-label>
        <sp-label>{{ item.name }}</sp-label>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>