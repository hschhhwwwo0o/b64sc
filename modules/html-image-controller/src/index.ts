import { _findImageHTMLElement } from "./utils/_findImageHTMLElement";

import { _copyHTMLImage } from "./requirements/copyHTMLImage/index";
import { _downloadHTMLImage } from "./requirements/downloadHTMLImage/index";

class HTMLImageController {
  private _imageElement: HTMLImageElement | null = null;

  constructor(imageElementID = "") {
    this._imageElement = _findImageHTMLElement(imageElementID);
  }

  /**
   * Download image
   * @requirement UF/FINAL-IMAGE/DOWNLOAD
   */
  public async downloadImage(): Promise<void> {
    return _downloadHTMLImage(this._imageElement?.src || "");
  }

  /**
   * Copying an image to the clipboard
   * @requirement UF/FINAL-IMAGE/COPY
   */
  public async copyImage(): Promise<void> {
    return _copyHTMLImage(this._imageElement);
  }
}

export { HTMLImageController };
