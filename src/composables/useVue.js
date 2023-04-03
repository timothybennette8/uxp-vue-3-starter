import { createApp } from "vue";

import panel from "../panel.vue";
import settings from "../settings.vue";
import index from "../index.vue";

export const createVue = async (entrypoint) => {
  switch (entrypoint) {
    case "index":
      return createApp(index);
    case "panel":
      return createApp(panel);
    case "settings":
      return createApp(settings);
  }
};
