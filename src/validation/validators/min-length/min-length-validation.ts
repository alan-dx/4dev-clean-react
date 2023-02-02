import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}// Detalhes especificos do validador vem no construtor

  validate(input: object): Error {
    return input[this.field]?.length <= this.minLength ? new InvalidFieldError() : null
  }
}
