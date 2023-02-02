import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/global.scss'
import { makeLogin } from './factories/pages/login/login-factory'
import { makeSignUp } from './factories/pages/signup/signup-factory'

ReactDOM.render(
  // Explicação do pq passar como prop o makeLogin ao invés de importar direto dentro do Router aos 9:50 da aula 31
  // Em resumo, é para evitar a instância desnecessárias de objetos. makeLogin é o ponteiro de uma função e só executa a msm quando a rota de login for chamada
  <Router
    makeLogin={makeLogin}
    makeSignUp={makeSignUp}
  />,
  document.getElementById('main')
)
