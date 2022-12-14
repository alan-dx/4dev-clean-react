import { mockHttpResponse } from './../test/mock-axios'
import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '../test'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'

jest.mock('axios')// Mockando a lib axios

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)// mockedAxios.post.mock.results[0].value => pegando o valor que foi mockado para o resolve do post em mock-axios.post
  })

  test('Should return the correct statusCode and body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)// mockedAxios.post.mock.results[0].value => pegando o valor que foi mockado para o resolve do post em mock-axios.post
  })
})
