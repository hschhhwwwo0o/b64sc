/**
 * Sending feedback
 * @requirement UF/FEEDBACK/CREATE
 */
export async function _createFeedback(
  feedbackText: string = "",
): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (feedbackText) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 1758);
  });
}
