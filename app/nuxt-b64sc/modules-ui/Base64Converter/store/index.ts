import { defineStore } from "pinia";

export const useBase64StringStore = defineStore("base64String", {
  state: () => {
    return {
      base64String: "",
    };
  },
  actions: {
    changeBase64String(newValue: string = "") {
      this.base64String = newValue;
    },
  },
});
