import React from 'react'
import Styles from './login-styles.scss'
import { Footer, LoginHeader, FormStatus, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@/domain/usecases'
import { Link, useHistory } from 'react-router-dom'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = (props) => {
  const history = useHistory()
  const [state, setState] = React.useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  React.useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    setState({
      ...state,
      emailError: props.validation.validate('email', formData),
      passwordError: props.validation.validate('password', formData)
    })
  }, [state.email, state.password])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await props.authentication.auth({ email: state.email, password: state.password })
      await props.saveAccessToken.save(account.accessToken)
      // localStorage.setItem('accessToken', account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, mainError: error.message })
    }
  }

  return (
    <div className={Styles.login} >
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form data-testid="form" className={Styles.form} autoComplete="off" onSubmit={handleSubmit} >
          <h2>Login</h2>
          <Input type="email" name="email" placeholder='Digite seu e-mail' />
          <Input type="password" name="password" placeholder='Digite sua senha' />
          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">Entrar</button>
          <Link to="/signup" data-testid="signup" className={Styles.link}>Criar conta</Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
