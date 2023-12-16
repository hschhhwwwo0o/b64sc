/** Views */
import Base64Preview from "./view/Base64Preview.vue";
import Base64TextareaInput from "./view/Base64TextareaInput.vue";

/** Utils */
import { _clear } from "./utils/_clear";

const Base64ConverterModuleUI = {
  view: {
    Base64Preview,
    Base64TextareaInput,
  },
  utils: {
    /** @requirement UF/CLEAR-INPUT-BASE64 */
    clear: _clear,
  },
};

export { Base64ConverterModuleUI };
