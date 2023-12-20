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
  },
};
</script>
