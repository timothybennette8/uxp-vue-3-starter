<script setup>
import { ref } from "vue"
import Select from "../../components/Select/index.vue"
const { app } = require("photoshop")
const doc = app.activeDocument;

const enums = ["Layers", "Channels"]

const selected = ref("")

const handleListen = (e) => {
  selected.value = e
}

// const updateActiveDoc = (e) => {
//   doc.value = app.activeDocument
// }

// require('photoshop').action.addNotificationListener([{ event: "close" }], updateActiveDoc)
// require('photoshop').action.addNotificationListener([{ event: "open" }], updateActiveDoc)

</script>

<template>
  <div class="flex flex-col gap-2">
    <Select v-model="selected" :selected="enums" @update:model-value="handleListen" />
    <sp-heading size="s">{{ selected }}</sp-heading>

    <ul v-if="doc">
      <li v-for="item of doc[selected.toLowerCase()]" :key="item">
        <sp-label>{{ item.name }}</sp-label>
      </li>
    </ul>

    <sp-heading size="xs" v-else>Please open a document.</sp-heading>

  </div>
</template>

<style scoped></style>