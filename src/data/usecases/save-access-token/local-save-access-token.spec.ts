import { SetStorageSpy } from '@/data/test/mock-storage'
import { LocalSaveAccessToken } from './local-save-access-token'
import faker from 'faker'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageSpy: SetStorageSpy
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageSpy()
  const sut = new LocalSaveAccessToken(setStorageSpy)// injeção de dependência

  return {
    setStorageSpy,
    sut
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const accessToken = faker.random.uuid()
    const { sut, setStorageSpy } = makeSut()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
