<script setup>
const props = defineProps({
  selected: String,
  modelValue: Array
})

const emit = defineEmits(["update:modelValue"])

const handle = (e) => {
  console.log(e.target)
  console.log(e.target.value)
  emit("update:modelValue", e.target)
}
</script>

<template>
  <div>
    <sp-label class="text-white">DUCK</sp-label>
    <sp-picker size="s" @change="handle($event)">
      <sp-menu>
        <sp-menu-item v-for="item of modelValue" :value="item">{{ item }}</sp-menu-item>

        <!-- <sp-menu-item value="value1" selected=true>Value 1</sp-menu-item>
                                              <sp-menu-item value="value2">Value 2</sp-menu-item>
                                              <sp-menu-item value="value3">Value 3</sp-menu-item> -->
      </sp-menu>
    </sp-picker>
  </div>
</template>

<style scoped></style>