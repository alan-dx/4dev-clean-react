import { ValidationBuilder } from '@/validation/builder/validation-builder'
import { ValidationComposite } from '@/validation/validators'
import { makeLoginValidations } from './login-validation-factory'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidations()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(5).build()
    ]))
  })
})
