import { HttpPostParams, HttpPostClient, HttpResponse, HttpStatusCode } from '@/data/protocols/http'
import faker from 'faker'

export const mockPostRequest = (): HttpPostParams => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

export class HttpPostClientSpy<R> implements HttpPostClient<R> {// Spy é um dublê que implementa o protocolo HttpPostClient, o objetivo é testar apenas a unidade RemoteAuthentication
  url?: string
  body?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
