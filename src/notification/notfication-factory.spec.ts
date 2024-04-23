import { NotificationFactory } from './notification.factory';
import { EmailNotifier } from './email.notifier';
import { SmsNotifier } from './sms.notifier';
import { PushNotifier } from './push.notifier';

describe('NotificationFactory', () => {
  it('should return an instance of EmailNotifier when type is email', () => {
    const notifier = NotificationFactory.getNotifier('email');
    expect(notifier).toBeInstanceOf(EmailNotifier);
  });

  it('should return an instance of SmsNotifier when type is sms', () => {
    const notifier = NotificationFactory.getNotifier('sms');
    expect(notifier).toBeInstanceOf(SmsNotifier);
  });

  it('should return an instance of PushNotifier when type is push', () => {
    const notifier = NotificationFactory.getNotifier('push');
    expect(notifier).toBeInstanceOf(PushNotifier);
  });

  it('should throw an error for unsupported notification types', () => {
    const invalidType = () => {
      NotificationFactory.getNotifier('invalid');
    };
    expect(invalidType).toThrowError('Unsupported notification type');
  });
});
