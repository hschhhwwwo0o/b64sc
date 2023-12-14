<template>
  <div>
    <textarea-input
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
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../store/index";

import TextareaInput from "../../../components/form/TextareaInput.vue";

export default {
  components: {
    TextareaInput,
  },
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String"]),
    ...mapStores(useBase64StringStore),
  },
  methods: {
    changeBase64String(newValue: string) {
      this.base64StringStore.changeBase64String(newValue);
    },
  },
};
</script>
