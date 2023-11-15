class HTMLImageController {
  private _imageElement: HTMLImageElement | null = null;

  constructor(imageElementID = "") {
    const imageElement: HTMLImageElement | null = document.querySelector(
      `#${imageElementID}`,
    );
    if (imageElement === null) {
      console.warn(
        `The element with the identifier ${imageElementID} was not found`,
      );
    }
    this._imageElement = imageElement;
  }

  /**
   * Download image
   * @requirement UF/FINAL-IMAGE/DOWNLOAD
   */
  public async downloadImage(): Promise<void> {
    const _link = document.createElement("a");
    _link.href = this._imageElement?.src || "";
    _link.download = "Download.jpg";
    document.body.appendChild(_link);
    _link.click();
    document.body.removeChild(_link);
  }

  /**
   * Copying an image to the clipboard
   * @requirement UF/FINAL-IMAGE/COPY
   */
  public async copyImage(): Promise<void> {
    if (this._imageElement) {
      const canvas = document.createElement("canvas");
      canvas.width = this._imageElement.width;
      canvas.height = this._imageElement.height;

      canvas
        ?.getContext("2d")
        ?.drawImage(
          this._imageElement,
          0,
          0,
          this._imageElement.width,
          this._imageElement.height,
        );
      canvas.toBlob((blob) => {
        if (blob) {
          try {
            navigator.clipboard.write([
              new ClipboardItem({
                "image/png": blob,
              }),
            ]);
          } catch (error) {
            console.error(error);
          }
        }
      }, "image/png");
    }
  }
}

export { HTMLImageController };
