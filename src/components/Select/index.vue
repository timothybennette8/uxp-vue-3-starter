<script setup>
import { ref } from "vue";

const props = defineProps({
  items: Array,
  modelValue: String,
  label: String
})

const emit = defineEmits(["update:modelValue"])

const selectedItem = ref()


const handleClick = (e) => {
  selectedItem.value = e.target.getAttribute("value")
}

const handleChange = (e) => {
  setTimeout(() => {
    emit("update:modelValue", selectedItem.value)
  }, 100)
}


</script>

<template>
  <div>
    <sp-dropdown size="s">
      <sp-menu slot="options" @change="handleChange">
        <sp-menu-item disabled selected>{{ props.label }}</sp-menu-item>
        <sp-menu-item v-for="item of props.items" :key="item" :value="item" :selected="props.modelValue === item ? true
          : undefined" @click="handleClick">{{ item }}</sp-menu-item>
      </sp-menu>
    </sp-dropdown>
  </div>
</template>

<style scoped></style>