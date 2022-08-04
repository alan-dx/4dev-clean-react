export class InvalidFieldError extends Error {
  constructor() {
    super('O valor inserido é inválido')
    this.name = 'InvalidFieldError'
  }
}
