import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("useUser", () => {
  const user = ref({
    name: "Luther Blisset",
    id: "123456789",
    authenticated: true,
  });

  return { user };
});
