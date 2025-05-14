import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { BcryptjsHashProvider } from './providers/hash/bcryptjs-hash.provider';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'HashProvider',
      useClass: BcryptjsHashProvider,
    },
  ],
})
export class UsersModule {}
