import { ERole } from '../../../shared/enums/role.enum';
import { UserEntity } from '../../entities/users.entity';

export type UserOutput = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: ERole;
  createdAt: Date;
  updatedAt: Date;
};

export class UserOutputMapper {
  static toOutput(entity: UserEntity): UserOutput {
    return entity.toJson();
  }
}
