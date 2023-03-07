import { HttpStatusCode } from './../../protocols/http/http-response'
import { HttpPostClient } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (private readonly url: string, private readonly httpPostClient: HttpPostClient<AccountModel>) {

  }

  async add (params: AddAccountParams): Promise<AccountModel> {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const response = await this.httpPostClient.post({ url: this.url, body: params })
    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}
