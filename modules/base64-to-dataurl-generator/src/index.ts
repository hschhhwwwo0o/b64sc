class Base64ToDataURLGenerator {
  /**
   * Generate dataURL
   * @requirement UF/FINAL-IMAGE/DATA-URL
   */
  public async generateDataURL(base64 = ""): Promise<string> {
    const dataUrl = `data:image/png;base64,${base64}`;
    return dataUrl;
  }
}

export { Base64ToDataURLGenerator };
