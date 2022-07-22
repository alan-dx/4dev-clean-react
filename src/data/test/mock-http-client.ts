import { HttpStatusCode } from './../protocols/http/http-response'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { HttpPostParams, HttpPostClient } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {// Spy é um dublê que implementa o protocolo HttpPostClient, o objetivo é testar apenas a unidade RemoteAuthentication
  url?: string
  body?: object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
