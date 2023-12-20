<template>
  <!-- @requirement UF/FINAL-IMAGE/PREVIEW -->
  <div class="cont">
    <div :class="!dataUrl ? 'preview-text' : 'preview-image'">
      <div v-if="!dataUrl" class="text-cont">
        <text-paragraph-element :color="'ultra-light'">
          This window will display the image after inserting the base64 string
          into the corresponding field.
        </text-paragraph-element>
        <br />
        <text-paragraph-element :color="'ultra-light'">
          Now the image is not loaded.
        </text-paragraph-element>
      </div>
      <div v-if="dataUrl">
        <img id="base64-image" :src="dataUrl" alt="Image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/** Connect store */
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../controllers/index";

export default {
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String", "dataUrl"]),
    ...mapStores(useBase64StringStore),
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_vars.scss";

.cont {
  width: 100%;
  height: 0px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.preview-text {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: $brandColor;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 25px;
  box-sizing: border-box;
  max-height: 550px;

  @media screen and (max-width: 900px) {
    height: calc(50vh - 70px);
  }
}

.preview-image {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: $brandColor;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 25px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  max-height: 550px;

  @media screen and (max-width: 900px) {
    height: calc(50vh - 70px);
  }
}

.preview-image img {
  max-width: 100%;
  max-height: 400px;
}

.text-cont {
  max-width: 320px;
}
</style>
