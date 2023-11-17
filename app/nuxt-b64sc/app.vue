<template>
  <div>
    <textarea
      v-model="base64textarea"
      name="base64"
      cols="30"
      rows="10"
    ></textarea>
    <div>
      {{ status }}
    </div>
    <div>
      <img v-bind:src="`${dataUrl}`" alt="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { Base64ToDataURLGenerator } from "../../modules/base64-to-dataurl-generator";

export default {
  data: () => {
    return {
      base64textarea: "",
      status: "",
      dataUrl: "",
    };
  },
  watch: {
    base64textarea: async function (value) {
      this.status = "Loading...";
      const base64ToDataURLGenerator = new Base64ToDataURLGenerator();
      const dataUrl = await base64ToDataURLGenerator.generateDataURL(value);
      this.dataUrl = await dataUrl;
      this.status = "";
    },
  },
};
</script>
