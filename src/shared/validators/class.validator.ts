import { validateSync } from 'class-validator';
import { FieldsErrors, IClassValidator } from './class.validator.interface';

export abstract class ClassValidator<Rules> implements IClassValidator<Rules> {
  errors: FieldsErrors;
  validatedProps: Rules;

  validate(props: any): boolean {
    const errors = validateSync(props);
    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        if (error.constraints) {
          this.errors[field] = Object.values(error.constraints);
        }
      }
    } else {
      this.validatedProps = props;
    }
    return !errors.length;
  }
}
