import React from 'react'
import Styles from './signup-styles.scss'
import { Footer, LoginHeader, FormStatus, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'

type Props = {
  validation: Validation
  addAccount?: AddAccount
}

const SignUp: React.FC<Props> = ({ validation, addAccount }) => {
  const [state, setState] = React.useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    emailError: '',
    nameError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  })

  React.useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
      passwordConfirmationError: validation.validate('passwordConfirmation', state.passwordConfirmation)
    })
  }, [state.name, state.email, state.password, state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (state.isLoading || state.emailError || state.passwordConfirmationError || state.passwordError || state.nameError) return
    setState({ ...state, isLoading: true })
    await addAccount.add({
      name: state.name,
      email: state.email,
      password: state.password,
      passwordConfirmation: state.passwordConfirmation
    })
  }

  return (
    <div className={Styles.signup} >
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder='Digite seu nome' />
          <Input type="email" name="email" placeholder='Digite seu e-mail' />
          <Input type="password" name="password" placeholder='Digite sua senha' />
          <Input type="password" name="passwordConfirmation" placeholder='Repita sua senha' />
          <button data-testid="submit" disabled={!!state.emailError || !!state.nameError || !!state.passwordError || !!state.passwordConfirmationError} className={Styles.submit} type="submit">Entrar</button>
          <span data-testid="signup" className={Styles.span}>Voltar Para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
