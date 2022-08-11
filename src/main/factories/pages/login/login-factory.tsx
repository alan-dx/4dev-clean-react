import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remote-authentication-factory'
import { makeLoginValidations } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  // A camada main faz a comunicação entre todos os componentes
  // makeLogin é responsável por injetar as dependências do Login

  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidations()}
    />
  )
}
