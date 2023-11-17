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
      const dataUrl1: string = `data:image/png;base64,${base64}`;

      const image = new Image();
      image.setAttribute("crossorigin", "anonymous");
      image.src = dataUrl1;
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

      const dataUrl2 = _canvasElement.toDataURL("image/png", 1);

      return dataUrl2;
    } catch (error) {
      console.error(error);
    }
  }
}

export { Base64ToDataURLGenerator };
