import { EmailNotifier } from './email.notifier';
import { SmsNotifier } from './sms.notifier';
import { PushNotifier } from './push.notifier';

export class NotificationFactory {
  static getNotifier(type: string) {
    switch (type) {
      case 'email':
        return new EmailNotifier();
      case 'sms':
        return new SmsNotifier();
      case 'push':
        return new PushNotifier();
      default:
        throw new Error('Unsupported notification type');
    }
  }
}
