import React from 'react'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = React.useContext(Context)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && (<span className={Styles.error} >Carregando...</span>)}
      {errorMessage && (<span className={Styles.error}>{errorMessage}</span>)}
    </div>
  )
}

export default FormStatus
