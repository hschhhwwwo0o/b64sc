<template>
  <div>
    <!-- @requirement UF/INPUT-BASE64 -->
    <form-textarea-input
      :resize="'none'"
      :label="'Base64 string'"
      :placeholder="'Enter base64 string...'"
      :style="'contrast'"
      :name="'base 64 input'"
      :value="base64String"
      @change="(newValue) => changeBase64String(newValue)"
    />
    <div class="actions">
      <!-- @requirement UF/COPY-INPUT-BASE64 -->
      <form-text-button @click="copyBase64String">Copy string</form-text-button>
      <!-- @requirement UF/CLEAR-INPUT-BASE64 -->
      <form-text-button :color="'danger'" @click="() => clearBase64String()">
        Clear string
      </form-text-button>
    </div>
  </div>
</template>

<script lang="ts">
/** Connect store */
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../controllers/index";

export default {
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String"]),
    ...mapStores(useBase64StringStore),
  },
  methods: {
    /**
     * @requirement UF/INPUT-BASE64
     */
    changeBase64String(newValue: string): void {
      this.base64StringStore.changeBase64String(newValue);
    },
    /**
     * @requirement UF/CLEAR-INPUT-BASE64
     */
    clearBase64String() {
      this.base64StringStore.clearBase64String();
    },
    /**
     * @requirement UF/COPY-INPUT-BASE64
     */
    copyBase64String() {
      this.base64StringStore.copyBase64String();
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
}
</style>
