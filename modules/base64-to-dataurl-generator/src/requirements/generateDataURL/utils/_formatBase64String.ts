/**
 * Formatting of the entered base64 string.
 */
export function _formatBase64String(base64: string): string {
  return `data:image/png;base64,${base64}`;
}
