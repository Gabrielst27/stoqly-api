import { BaseEntity } from '../../shared/entities/base-entity';
import { ERole } from '../../shared/enums/role.enum';
import { EntityValidationError } from '../../shared/errors/entity-validation.error';
import { UserValidator } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  role?: ERole;
  createdAt?: Date;
  updatedAt?: Date;
};

export class UserEntity extends BaseEntity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validate(props);
    super(props, id);
    this.props.role = this.props.role ?? ERole.USER;
    this.props.createdAt = this.props.createdAt ?? new Date();
    this.props.updatedAt = this.props.updatedAt ?? new Date();
  }

  static validate(props: UserProps) {
    const validator = new UserValidator();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors);
    }
  }
}
