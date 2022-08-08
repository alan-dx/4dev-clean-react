import { RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = sut.field('any_field').required().build()
    // O método static retorna uma instância da própria classe, dessa forma é possível ter acesso aos métodos tradicionais da instância.
    // Como a classe Validation Builder não possui uma instância (o construtor está privado) não tem como criar uma instância dele da forma tradicional
    // Assim só é possivel instanciar essa classe acessando o método static field. new ValidationBuilder() não é permitido
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })
})
