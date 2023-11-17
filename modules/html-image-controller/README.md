# Module @html-image-controller

The module is designed to download an image and copy the image to the clipboard

```js
const htmlImageController = new HTMLImageController("image-id");

/**
 * Download image
 * @requirement UF/FINAL-IMAGE/DOWNLOAD
 */
await htmlImageController.downloadImage();

/**
 * Copying an image to the clipboard
 * @requirement UF/FINAL-IMAGE/COPY
 */
await htmlImageController.copyImage();
```
