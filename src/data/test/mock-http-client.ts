import { HttpPostParams, HttpPostClient } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {// Spy é um dublê que implementa o protocolo HttpPostClient, o objetivo é testar apenas a unidade RemoteAuthentication
  url?: string
  body?: object

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve()
  }
}
