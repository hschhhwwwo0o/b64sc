<template>
  <div>
    <textarea
      v-model="base64textarea"
      name="base64"
      cols="30"
      rows="10"
    ></textarea>
    <div>
      <img :src="`${dataUrl}`" alt="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { Base64ToDataURLGenerator } from "../../modules/base64-to-dataurl-generator/dist";

export default {
  data() {
    return {
      base64textarea: "",
      dataUrl: "",
    };
  },
  watch: {
    base64textarea: async function (value: string) {
      const dataUrl: string = await this.generateDataURL(value);
      this.dataUrl = dataUrl;
    },
  },
  methods: {
    async generateDataURL(base64 = ""): Promise<string> {
      const base64ToDataURLGenerator = new Base64ToDataURLGenerator();
      const dataUrl: string =
        await base64ToDataURLGenerator.generateDataURL(base64);
      return dataUrl;
    },
  },
};
</script>
