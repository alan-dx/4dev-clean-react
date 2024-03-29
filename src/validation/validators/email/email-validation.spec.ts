import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'
import faker from 'faker'

const makeSut = (field: string): EmailValidation => new EmailValidation(field)// Parâmetro = nome do campo

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.word() }) // Parâmetro = valor do campo
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() }) // Parâmetro = valor do campo
    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
