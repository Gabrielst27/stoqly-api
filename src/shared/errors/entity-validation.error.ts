import { FieldsErrors } from '../validators/class.validator.interface';

export class EntityValidationError extends Error {
  constructor(public error: FieldsErrors) {
    super('Entity validation error');
    this.name = 'EntityValidationError';
  }
}
