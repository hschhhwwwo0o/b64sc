<template>
  <!-- @requirement UF/FINAL-IMAGE/PREVIEW -->
  <div class="preview">
    <div class="text-cont">
      <paragraph-text :color="'ultra-light'">
        &nbsp; &nbsp; &nbsp; &nbsp; This window will display the image after
        inserting the base64 string into the corresponding field.
      </paragraph-text>
      <br />
      <paragraph-text :color="'ultra-light'">
        &nbsp; &nbsp; &nbsp; &nbsp; Now the image is not loaded.
      </paragraph-text>
    </div>
  </div>
</template>

<script lang="ts">
/** Connect store */
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../controllers/index";
import ParagraphText from "../../../components/text/ParagraphText.vue";

export default {
  components: { ParagraphText },
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
  padding: 25px;
}

.text-cont {
  max-width: 320px;
}
</style>
