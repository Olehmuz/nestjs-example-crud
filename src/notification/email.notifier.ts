import { INotifier } from './interfaces/notifire.inteface';

export class EmailNotifier implements INotifier {
  async notify(message: string, recipient: string): Promise<void> {
    // Логіка відправлення електронної пошти
    console.log(`Sending email to ${recipient}: ${message}`);
    // Реальна імплементація б залучала інтеграцію з сервісом електронної пошти
  }
}
