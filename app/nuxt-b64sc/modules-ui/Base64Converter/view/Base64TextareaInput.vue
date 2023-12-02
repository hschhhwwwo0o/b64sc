<template>
  <div>
    <textarea-input
      :label="'Base64 string'"
      :placeholder="'Enter base64 string...'"
      :style="'contrast'"
      :name="'base 64 input'"
    />
  </div>
</template>

<script lang="ts">
import TextareaInput from "../../../components/form/TextareaInput.vue";

export default {
  components: {
    TextareaInput,
  },
};
</script>
