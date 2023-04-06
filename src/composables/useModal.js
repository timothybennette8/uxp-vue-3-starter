import settings from "../settings.vue";
import { createApp } from "vue";

export const openProgrammaticDialog = async (title) => {
  const theDialog = document.createElement("dialog");

  const vueApp = createApp(settings).mount(theDialog);

  document.body.appendChild(theDialog);

  const r = await theDialog.uxpShowModal({
    title: title,
    resize: "none", // "both", "horizontal", "vertical",
    size: {
      width: 500,
      height: 400,
    },
  });
  theDialog.remove();
};
