import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'

// O método static retorna uma instância da própria classe, dessa forma é possível ter acesso aos métodos tradicionais da instância.
// Como a classe Validation Builder não possui uma instância (o construtor está privado) não tem como criar uma instância dele da forma tradicional
// Assim só é possivel instanciar essa classe acessando o método static field. new ValidationBuilder() não é permitido

export class ValidationBuilder {// Builder Design Pattern
  // O ValidationBuilder tem como objetivo facilitar a construção dos FieldValidations
  // Com o builder será mais fácil aplicar os validadores desejado no campo, uma vez q o objetivo
  // É agrupar todos os validadores em um único lugar e utilizar métodos que vão retornar-los
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []) // Instancia a classe passando o fieldName para o construtor. Assim vc tem acesso ao fieldName dentro do required
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
