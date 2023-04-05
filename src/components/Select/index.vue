<script setup>
const props = defineProps({
  selected: Array,
  modelValue: String
})

const emit = defineEmits(["update:modelValue"])

const handle = (e) => {
  const val = e.target.getAttribute("selectedOptions")[0];
  let payload;

  switch (val) {
    case 25:
      payload = "Layers";
      break
    case 27:
      payload = "Channels"
  }
  emit("update:modelValue", payload)
}
</script>

<template>
  <div>
    <sp-label class="text-white">Choose</sp-label>
    <sp-picker size="s">
      <sp-menu slot="options" @change="handle($event)">
        <sp-menu-item v-for="item of selected" :value="item">{{ item }}</sp-menu-item>
      </sp-menu>
    </sp-picker>


  </div>
</template>

<style scoped></style>