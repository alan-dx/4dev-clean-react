/* eslint-disable @typescript-eslint/require-await */
import { SetStorage } from '../protocols/cache/set-storage'

export class SetStorageSpy implements SetStorage {// É um spy dó código de produção que vai vir da camada de INFRA
  key: string
  value: any

  async set (key: string, value: any): Promise<void> {
    this.key = key
    this.value = value
  }
}
