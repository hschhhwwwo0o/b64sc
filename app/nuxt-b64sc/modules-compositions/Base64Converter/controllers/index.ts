import { defineStore } from "pinia";

export const useBase64StringStore = defineStore("base64String", {
  state: () => {
    return {
      base64String: "",
    };
  },
  actions: {
    /**
     * @requirement UF/INPUT-BASE64
     */
    changeBase64String(newValue: string = ""): void {
      this.base64String = newValue;
    },
  },
});
