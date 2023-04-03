import index from "./index.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

// UXP
const { entrypoints } = require("uxp");
const { version } = require("../plugin/manifest.json");

// Tailwind
import "./assets/tailwind.css";

// Composables
const { getSettings, createSettings } = require("./composables/useSettings");
const { openProgrammaticDialog } = require("./composables/useModal");
const { timeThis, reloadPlugin } = require("./composables/useHelpers");

// Vue & Pinia init
const pinia = createPinia();
const vueApp = createApp(index);
vueApp.use(pinia);

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
        {
          id: "resetDefaultSettings",
          label: "Reset to Default Settings",
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
          case "resetDefaultSettings":
            // resetToDefaults();
            break;
        }
      },
    },
  },
});

// ugly fix for ReferenceError: SVGElement is not defined
global.SVGElement = global.Element;

// Get settings
let settings;

const init = async () => {
  try {
    settings = await getSettings();

    if (!settings) {
      settings = createSettings({
        version,
        ioSettings: {
          input: {
            type: "files",
            includeSubfolders: false,
          },
          output: {
            type: "inherit",
            keepStructure: false,
            path: "",
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Initialise plugin
timeThis("🌱 Plugin initialiation", init);
