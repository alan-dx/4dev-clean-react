import React from 'react'
import Styles from './signup-styles.scss'
import { Footer, LoginHeader, FormStatus, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const SignUp: React.FC = (props) => {
  const [state] = React.useState({
    isLoading: false,
    emailError: 'Campo obrigatório',
    nameError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <div className={Styles.signup} >
      <LoginHeader />
      <Context.Provider value={{ state }} >
        <form className={Styles.form} >
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder='Digite seu nome' />
          <Input type="email" name="email" placeholder='Digite seu e-mail' />
          <Input type="password" name="password" placeholder='Digite sua senha' />
          <Input type="password" name="passwordConfirmation" placeholder='Repita sua senha' />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span data-testid="signup" className={Styles.span}>Voltar Para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
