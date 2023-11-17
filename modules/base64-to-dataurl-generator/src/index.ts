class Base64ToDataURLGenerator {
  /**
   * Generate dataURL
   * @requirement UF/FINAL-IMAGE/DATA-URL
   */
  public async generateDataURL(base64 = ""): Promise<string | undefined> {
    try {
      if (base64.includes("data:image/png;base64,")) {
        return base64;
      }
      if (base64.includes("data:image/jpg;base64,")) {
        return base64;
      }
      if (base64.includes("data:image/jpeg;base64,")) {
        return base64;
      }
      const dataUrlBase64: string = `data:image/png;base64,${base64}`;

      const image = new Image();
      image.setAttribute("crossorigin", "anonymous");
      image.src = dataUrlBase64;
      await image.decode();

      const _canvasElement: HTMLCanvasElement = (function _createCanvas(
        _imageElement: HTMLImageElement | null,
      ) {
        const _canvas = document.createElement("canvas");
        if (_imageElement) {
          _canvas.width = _imageElement.width;
          _canvas.height = _imageElement.height;
        }
        return _canvas;
      })(image);

      /** Draw image on canvas */
      (function drawImageOnCanvas(
        _canvasElement: HTMLCanvasElement,
        _imageElement: HTMLImageElement | null,
      ) {
        if (_imageElement) {
          _canvasElement
            ?.getContext("2d")
            ?.drawImage(
              _imageElement,
              0,
              0,
              _imageElement.width,
              _imageElement.height,
            );
        }
      })(_canvasElement, image);

      const dataUrl = _canvasElement.toDataURL("image/png", 1);

      return dataUrl;
    } catch (error) {
      console.error(error);
    }
  }
}

export { Base64ToDataURLGenerator };
