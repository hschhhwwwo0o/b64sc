import { _generateDataURL } from "./requirements/_generateDataURL";

class Base64ToDataURLGenerator {
  /**
   * Generate dataURL
   * @requirement UF/FINAL-IMAGE/DATA-URL
   */
  public async generateDataURL(base64 = ""): Promise<string | undefined> {
    return await _generateDataURL(base64);
  }
}

export { Base64ToDataURLGenerator };
