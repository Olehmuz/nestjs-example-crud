import { INotifier } from './interfaces/notifire.inteface';

export class PushNotifier implements INotifier {
  async notify(message: string, recipient: string): Promise<void> {
    // Логіка відправлення push-нотифікації
    console.log(`Sending push notification to ${recipient}: ${message}`);
    // Інтеграція з push-нотифікаційним сервісом (наприклад, Firebase)
  }
}
