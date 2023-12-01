import { _createFeedback } from "./requirements/_createFeedback";

class FeedbackCreator {
  /**
   * Sending feedback
   * @requirement UF/FEEDBACK/CREATE
   */
  public async createFeedback(feedbackText: string = ""): Promise<void> {
    return _createFeedback(feedbackText);
  }
}

export { FeedbackCreator };
