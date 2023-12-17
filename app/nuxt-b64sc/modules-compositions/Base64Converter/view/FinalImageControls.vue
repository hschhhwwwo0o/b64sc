<template>
  <div v-if="dataUrl" class="top-panel">
    <!-- @requirement UF/FINAL-IMAGE/DOWNLOAD -->
    <form-text-button :color="'contrast'" @click="downloadImage"
      >Download</form-text-button
    >
    <!-- @requirement UF/FINAL-IMAGE/COPY -->
    <form-text-button v-if="!isCopied" :color="'contrast'" @click="copyImage"
      >Copy</form-text-button
    >
    <div style="margin-top: 2px">
      <text-paragraph-element v-if="isCopied" :color="'dark'">
        The image has been copied successfully</text-paragraph-element
      >
    </div>
  </div>
</template>

<script lang="ts">
/** Connect store */
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../controllers/index";

export default {
  data() {
    return {
      isCopied: false,
    };
  },
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String", "dataUrl"]),
    ...mapStores(useBase64StringStore),
  },
  methods: {
    /**
     * @requirement UF/FINAL-IMAGE/DOWNLOAD
     */
    async downloadImage(): Promise<void> {
      await this.base64StringStore.downloadImage();
    },
    /**
     * @requirement UF/FINAL-IMAGE/COPY
     */
    async copyImage(): Promise<void> {
      await this.base64StringStore.copyImage();
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-panel {
  height: 0px;
  position: relative;
  top: -30px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
