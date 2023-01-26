import faker from 'faker'
import { AddAccountParams } from '../usecases'

export const mockAddAccountParams = (): AddAccountParams => {
  const name = faker.name.findName()
  const email = faker.internet.email()
  const password = faker.internet.password()
  const passwordConfirmation = password
  return {
    name,
    email,
    password,
    passwordConfirmation
  }
}
