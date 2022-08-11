import { RemoteAuthenticaiton } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'

export const makeRemoteAuthentication = (): Authentication => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  return new RemoteAuthenticaiton(makeApiUrl('/login'), makeAxiosHttpClient())
}
