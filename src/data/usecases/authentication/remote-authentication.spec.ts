import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteAuthenticaiton } from './remote-authentication'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthenticaiton
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthenticaiton(url, httpPostClientSpy) // sut === system under test

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()

    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
