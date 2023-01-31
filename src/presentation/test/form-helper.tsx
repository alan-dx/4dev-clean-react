import { RenderResult } from '@testing-library/react'

export const testChildCount = (sut: RenderResult, field: string, count: number): void => {
  const el = sut.getByTestId(field)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError: string): void => {
  const fieldElement = sut.getByTestId(`${fieldName}-status`)
  expect(fieldElement.title).toBe(validationError || 'Tudo certo!')
  expect(fieldElement.textContent).toBe(validationError ? '🔴' : '🟢')
}
