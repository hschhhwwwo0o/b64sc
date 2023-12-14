<template>
  <div>
    <horizontal-separated-layout>
      <template #left-side>
        <div>
          <div class="horizontal-paddings vertical-paddings">
            <base-64-textarea-input />
          </div>
          <border-separate :style="'dark'" />
        </div>
      </template>
      <template #right-side>
        <base-64-preview />
        <border-separate />
      </template>
    </horizontal-separated-layout>
  </div>
</template>

<script>
/** Components */
import BorderSeparate from "./components/decore/BorderSeparate.vue";

/** Layouts */
import HorizontalSeparatedLayout from "./components/layouts/HorizontalSeparatedLayout.vue";

/** Modules UI */
import { Base64ConverterModuleUI } from "./modules-ui/Base64Converter/index";

export default {
  components: {
    HorizontalSeparatedLayout,
    Base64TextareaInput: Base64ConverterModuleUI.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleUI.view.Base64Preview,
    BorderSeparate,
  },
};
</script>
