export type FieldsErrors = {
  [field: string]: string[];
};

export interface IClassValidator<Rules> {
  errors: FieldsErrors;
  validatedProps: Rules;

  validate(props: any): boolean;
}
