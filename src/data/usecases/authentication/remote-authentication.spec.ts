import { RemoteAuthenticaiton } from './remote-authentication'
import { HttpPostClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { mockAccountModel, mockAuthentication } from '@/domain/test'
import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthenticaiton
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
  const sut = new RemoteAuthenticaiton(url, httpPostClientSpy) // sut === system under test. A injeção de dependência ocorre quando passo a instância do HttpPostClient para o RemoteAuthentication

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

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.auth(mockAuthentication())// Para testar um excessão lançada por uma promise remove o await e armazena em uma variavel
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())// .rejects captura o reject da promise
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = { // Simulando o erro 401
      statusCode: HttpStatusCode.badRequest
    }

    const promise = sut.auth(mockAuthentication())// Para testar um excessão lançada por uma promise remove o await e armazena em uma variavel
    await expect(promise).rejects.toThrow(new UnexpectedError())// .rejects captura o reject da promise
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = { // Simulando o erro 401
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.auth(mockAuthentication())// Para testar um excessão lançada por uma promise remove o await e armazena em uma variavel
    await expect(promise).rejects.toThrow(new UnexpectedError())// .rejects captura o reject da promise
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.auth(mockAuthentication())// Para testar um excessão lançada por uma promise remove o await e armazena em uma variavel
    await expect(promise).rejects.toThrow(new UnexpectedError())// .rejects captura o reject da promise
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const account = await sut.auth(mockAuthentication())
    expect(account).toEqual(httpResult)
  })
})
