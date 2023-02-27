import { SetStorage } from '@/data/protocols/cache/set-storage'
import { UnexpectedError } from '@/domain/errors'
import { SaveAccessToken } from '@/domain/usecases/save-access-token'

export class LocalSaveAccessToken implements SaveAccessToken {// Implementa a regra de negocio SaveAccessToken
  constructor (private readonly setStorage: SetStorage) { // recebe o protocolo SetStorage para realizar a INJEÇÃO DE DEPENDÊNCIA
    // "A setinha pequena do desenho"
  }

  async save (accessToken: string): Promise<void> {
    if (!accessToken) {
      throw new UnexpectedError()
    }
    await this.setStorage.set('accessToken', accessToken)
  }
}
