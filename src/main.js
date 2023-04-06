import index from "./index.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

// UXP
const { entrypoints } = require("uxp");

// Tailwind
import "./assets/tailwind.css";

// Composables
const { openProgrammaticDialog } = require("./composables/useModal");
const { reloadPlugin } = require("./composables/useHelpers");

// Vue & Pinia init
const pinia = createPinia();
const vueApp = createApp(index);
vueApp.use(pinia);

// Ugly fix for ReferenceError: SVGElement is not defined
global.SVGElement = global.Element;

// UXP Entrypoints
entrypoints.setup({
  panels: {
    "Vue 3 Starter": {
      create() {
        vueApp.mount("#container");
      },
      menuItems: [
        {
          id: "settings",
          label: "Settings",
          checked: false,
          enabled: true,
        },
        {
          id: "reloadPanelFlyout",
          label: "Reload Plugin",
          checked: false,
          enabled: true,
        },
      ],
      invokeMenu(id) {
        switch (id) {
          case "settings":
            openProgrammaticDialog("Settings");
            break;
          case "reloadPanelFlyout":
            reloadPlugin();
            break;
        }
      },
    },
  },
});
