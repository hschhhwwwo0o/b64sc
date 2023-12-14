<template>
  <div>
    <horizontal-separated-layout>
      <template #left-side>
        <div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <h-1-text>B64SC / Base64StringConverter</h-1-text>
              <div class="top-2">
                <paragraph-text>
                  &nbsp; &nbsp; &nbsp; &nbsp; Converter base64 strings to high
                  quality images for further image download/copying. Base64 is a
                  group of similar binary-to-text encoding schemes that
                  represent binary data in an ASCII string format by translating
                  it into a radix-64 representation. Use the simple and
                  intuitive user interface of our service to convert base64
                  string. Just enter the base64 string in the appropriate field
                  and download your image in the highest quality without
                  watermarks.
                </paragraph-text>
              </div>
            </div>
            <border-separate :style="'dark'" />
          </div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <base-64-textarea-input />
            </div>
            <border-separate :style="'dark'" />
          </div>
          <div>
            <div class="horizontal-paddings vertical-paddings">
              <div>
                <link-text>Human Interface Guidelines</link-text>
              </div>
              <div class="top-2">
                <link-text>Human Guidelines</link-text>
              </div>
              <div class="top-2">
                <link-text
                  >More info about Human Interface Guidelines</link-text
                >
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #right-side>
        <div>
          <div class="horizontal-paddings vertical-paddings">
            <h-1-text :color="'dark'">Result</h-1-text>
            <div class="top-2">
              <paragraph-text :color="'dark'">
                &nbsp; &nbsp; &nbsp; &nbsp; The result of the service will
                appear in the highlighted window below after specifying the
                base64 string in the corresponding field
              </paragraph-text>
            </div>
          </div>
          <border-separate :style="'light'" />
        </div>
        <div>
          <base-64-preview />
        </div>
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
import LinkText from "./components/text/LinkText.vue";

export default {
  components: {
    HorizontalSeparatedLayout,
    Base64TextareaInput: Base64ConverterModuleUI.view.Base64TextareaInput,
    Base64Preview: Base64ConverterModuleUI.view.Base64Preview,
    BorderSeparate,
    H1Text,
    ParagraphText,
    LinkText,
  },
};
</script>
