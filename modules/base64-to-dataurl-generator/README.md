# Module @base64-to-dataurl-generator

The module is designed to generate valid dataUrl strings based on base64 strings.

```ts
const base64ToDataURLGenerator = new Base64ToDataURLGenerator();

/**
 * Generate dataURL
 * @requirement UF/FINAL-IMAGE/DATA-URL
 */
const dataUrl: string =
  await base64ToDataURLGenerator.generateDataURL("base64 string...");
```
