import { Base64ToDataURLGenerator } from "module/base64-to-dataurl-generator";

import { defineStore } from "pinia";

export const useBase64StringStore = defineStore("base64String", {
  state: () => {
    return {
      base64String: "",
      dataUrl: "",
    };
  },
  actions: {
    /**
     * @requirement UF/INPUT-BASE64
     */
    async changeBase64String(newValue: string = ""): Promise<void> {
      const base64ToDataURLGenerator = new Base64ToDataURLGenerator();
      this.base64String = newValue;
      const dataUrl = await base64ToDataURLGenerator.generateDataURL(newValue);
      this.dataUrl = dataUrl || "";
    },
  },
});
