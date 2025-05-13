import { ClassValidator } from '../../shared/validators/class.validator';
import { UserProps } from '../entities/users.entity';
import { UserRules } from './users.rules';

export class UserValidator extends ClassValidator<UserRules> {
  validate(props: UserProps): boolean {
    return super.validate(new UserRules(props ?? ({} as UserProps)));
  }
}
