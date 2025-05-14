import { IHashProvider } from './hash.provider.interface';
import { hash, compare } from 'bcryptjs';

export class BcryptjsHashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return hash(payload, 12);
  }
  async compareHash(newPayload: string, oldPayload: string): Promise<boolean> {
    return compare(newPayload, oldPayload);
  }
}
