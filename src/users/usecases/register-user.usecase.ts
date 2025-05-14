import { BadRequestException } from '@nestjs/common';
import { RegisterUserInput } from '../dtos/inputs/register-user-input.dto';
import { UserOutput, UserOutputMapper } from '../dtos/outputs/user-output.dto';
import { IUserRepository } from '../repositories/users.repository.interface';
import { IHashProvider } from '../providers/hash/hash.provider.interface';
import { UserEntity } from '../entities/users.entity';

export namespace RegisterUserUseCase {
  export type Input = RegisterUserInput;
  export type Output = UserOutput;
  export class UseCase {
    constructor(
      private repository: IUserRepository.Repository,
      private hashProvider: IHashProvider,
    ) {}
    async execute(input: Input): Promise<Output> {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new BadRequestException('Input data not provided');
      }
      await this.repository.emailExists(email);
      const hashPassword = await this.hashProvider.generateHash(password);
      const entity = new UserEntity({ name, email, password: hashPassword });
      await this.repository.insert(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}
