import React from 'react'
import SignUp from '@/presentation/pages/signup/signup'
import { RenderResult, render } from '@testing-library/react'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <SignUp />
  )

  return {
    sut
  }
}

const testChildCount = (sut: RenderResult, field: string, count: number): void => {
  const el = sut.getByTestId(field)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

const testStatusForField = (sut: RenderResult, fieldName: string, validationError: string): void => {
  const fieldElement = sut.getByTestId(`${fieldName}-status`)
  expect(fieldElement.title).toBe(validationError || 'Tudo certo!')
  expect(fieldElement.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('Signup Component', () => {
  test('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()
    testChildCount(sut, 'error-wrap', 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
