import { HttpPostClientSpy } from './../../test/mock-http-client'
import { RemoteAuthenticaiton } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthenticaiton(url, httpPostClientSpy) // sut === system under test
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
