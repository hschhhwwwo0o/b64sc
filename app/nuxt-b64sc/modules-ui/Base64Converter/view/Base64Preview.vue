<template>
  <div>
    {{ base64String }}
  </div>
</template>

<script lang="ts">
import { mapStores, mapWritableState } from "pinia";
import { useBase64StringStore } from "../store/index";

export default {
  computed: {
    ...mapWritableState(useBase64StringStore, ["base64String"]),
    ...mapStores(useBase64StringStore),
  },
};
</script>
