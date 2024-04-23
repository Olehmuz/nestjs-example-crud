export interface INotifier {
  notify(message: string, recipient: string): Promise<void>;
}
