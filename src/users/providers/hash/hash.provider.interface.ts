export interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(newPayload: string, oldPayload: string): Promise<boolean>;
}
