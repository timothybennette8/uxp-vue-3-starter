<script setup>
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
    <sp-body v-if="user.authenticated" class="success">Authenticated</sp-body>
    <sp-body v-else class="error">Unauthenticated</sp-body>
  </div>
</template>

<style scoped>
.success {
  color: green
}

.error {
  color: red
}
</style>