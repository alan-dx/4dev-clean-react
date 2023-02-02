import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { AddAccount } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'

export const makeRemoteAddAccount = (): AddAccount => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
