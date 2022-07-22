import { RemoteAuthenticaiton } from './remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import faker from 'faker'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { mockAuthentication } from '@/domain/test/mock-autentication'

type SutTypes = {
  sut: RemoteAuthenticaiton
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthenticaiton(url, httpPostClientSpy) // sut === system under test. A inhenção de dependência ocorre quando passo a instância do HttpPostClient para o RemoteAuthentication

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()

    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = { // Simulando o erro 401
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.auth(mockAuthentication())// Para testar um excessão lançada por uma promise remove o await e armazena em uma variavel
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())// .rejects captura o reject da promise
  })
})
