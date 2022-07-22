import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthenticaiton } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthenticaiton(url, httpPostClientSpy) // sut === system under test
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
