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
    const _linkElement = document.createElement("a");
    _linkElement.href = this._imageElement?.src || "";
    _linkElement.download = "Download.jpg";
    document.body.appendChild(_linkElement);
    _linkElement.click();
    document.body.removeChild(_linkElement);
  }

  /**
   * Copying an image to the clipboard
   * @requirement UF/FINAL-IMAGE/COPY
   */
  public async copyImage(): Promise<void> {
    if (this._imageElement) {
      const _canvasElement = document.createElement("canvas");
      _canvasElement.width = this._imageElement.width;
      _canvasElement.height = this._imageElement.height;

      _canvasElement
        ?.getContext("2d")
        ?.drawImage(
          this._imageElement,
          0,
          0,
          this._imageElement.width,
          this._imageElement.height,
        );
      _canvasElement.toBlob(function _blobHandler(_blob) {
        try {
          if (_blob) {
            navigator.clipboard.write([
              new ClipboardItem({
                "image/png": _blob,
              }),
            ]);
          } else {
            throw "Blob error";
          }
        } catch (error) {
          console.error(error);
        }
      }, "image/png");
    }
  }
}

export { HTMLImageController };
