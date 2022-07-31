import React from 'react'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = React.useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && (<span className={Styles.error} >Carregando...</span>)}
      {errorState.main && (<span className={Styles.error}>{errorState.main}</span>)}
    </div>
  )
}

export default FormStatus
