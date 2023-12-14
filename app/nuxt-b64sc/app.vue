<template>
  <div>
    <horizontal-separated-layout>
      <template #left-side>
        <div>
          <div class="horizontal-paddings vertical-paddings">
            <h-1-text>B64SC / Base64StringConverter</h-1-text>
            <div class="top-1">
              <paragraph-text>
                Converter base64 strings to high quality images for further
                image download/copying. Base64 is a group of similar
                binary-to-text encoding schemes that represent binary data in an
                ASCII string format by translating it into a radix-64
                representation. Use the simple and intuitive user interface of
                our service to convert base64 string. Just enter the base64
                string in the appropriate field and download your image in the
                highest quality without watermarks.
              </paragraph-text>
            </div>
          </div>
          <border-separate :style="'dark'" />
          <div class="horizontal-paddings vertical-paddings">
            <base-64-textarea-input />
          </div>
          <border-separate :style="'dark'" />
        </div>
      </template>
      <template #right-side>
        <base-64-preview />
      </template>
    </horizontal-separated-layout>
  </div>
</template>

<script>
/** Components */
import BorderSeparate from "./components/decore/BorderSeparate.vue";
import H1Text from "./components/text/H1Text.vue";
import ParagraphText from "./components/text/ParagraphText.vue";

/** Layouts */
import HorizontalSeparatedLayout from "./components/layouts/HorizontalSeparatedLayout.vue";

/** Modules compositions */
import { Base64ConverterModuleUI } from "./modules-compositions/Base64Converter/index";

export default {
  components: {
    HorizontalSeparatedLayout,
    Base64TextareaInput: Base64ConverterModuleUI.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleUI.view.Base64Preview,
    BorderSeparate,
    H1Text,
    ParagraphText,
  },
};
</script>
