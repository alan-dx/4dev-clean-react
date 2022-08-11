import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): any => (
  { // mockando o resultado da request post do axios
    data: faker.random.objectElement(),
    status: faker.random.number()
  }
)

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())
  return mockedAxios
}
