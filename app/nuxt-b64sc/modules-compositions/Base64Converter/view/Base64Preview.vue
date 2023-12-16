<template>
  <div class="preview"></div>
</template>

<script lang="ts">
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../controllers/index";

export default {
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String"]),
    ...mapStores(useBase64StringStore),
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_vars.scss";

.preview {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: $brandColor;
  flex-grow: 1;
  flex-wrap: wrap;
}
</style>
