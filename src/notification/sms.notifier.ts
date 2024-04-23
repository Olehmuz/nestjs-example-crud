import { INotifier } from './interfaces/notifire.inteface';

export class SmsNotifier implements INotifier {
  async notify(message: string, recipient: string): Promise<void> {
    // Логіка відправлення SMS
    console.log(`Sending SMS to ${recipient}: ${message}`);
    // В реальному сценарії, тут могла б бути інтеграція з SMS-гейтвеєм
  }
}
