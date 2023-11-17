class Base64ToDataURLGenerator {
  /**
   * Generate dataURL
   * @requirement UF/FINAL-IMAGE/DATA-URL
   */
  public async generateDataURL(base64 = ""): Promise<string> {
    if (base64.includes("data:image/png;base64,")) {
      return base64;
    }
    if (base64.includes("data:image/jpg;base64,")) {
      return base64;
    }
    if (base64.includes("data:image/jpeg;base64,")) {
      return base64;
    }
    const dataUrl = `data:image/png;base64,${base64}`;
    return dataUrl;
  }
}

export { Base64ToDataURLGenerator };
