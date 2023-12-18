/**
 * Checking the correctness of the original base64 string.
 */
export function _isCompletedBase64String(base64: string): boolean {
  if (base64.includes("data:image/png;base64,")) {
    return true;
  }
  if (base64.includes("data:image/jpg;base64,")) {
    return true;
  }
  if (base64.includes("data:image/jpeg;base64,")) {
    return true;
  }
  return false;
}
