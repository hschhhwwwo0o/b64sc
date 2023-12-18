import { _createFeedback } from "./requirements/_createFeedback";

class FeedbackCreator {
  /**
   * Sending feedback
   * @requirement UF/FEEDBACK/CREATE
   */
  public async createFeedback(feedbackText: string = ""): Promise<boolean> {
    const response = await _createFeedback(feedbackText);
    return response;
  }
}

export { FeedbackCreator };
