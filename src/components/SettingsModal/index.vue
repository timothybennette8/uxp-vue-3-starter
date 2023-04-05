<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/userStore.js"
const userStore = useUserStore();
const { user } = storeToRefs(userStore)
</script>

<template>
  <div>
    <sp-heading size="m">Hello {{ user.name }}</sp-heading>
    <sp-body>Your id is: {{ user.id }}</sp-body>
    <sp-heading size="s">Account status</sp-heading>
    <sp-body v-if="user.authenticated" class="text-green-400">Authenticated</sp-body>
    <sp-body v-else class="text-red-500">Un-authenticated</sp-body>
  </div>
</template>

<style scoped></style>