import { RemoteAuthenticaiton } from '@/data/usecases/authentication/remote-authentication'
import React from 'react'
import { Login } from '@/presentation/pages'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/builder/validation-builder'

export const makeLogin: React.FC = () => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()

  const remoteAuthentication = new RemoteAuthenticaiton(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])

  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
