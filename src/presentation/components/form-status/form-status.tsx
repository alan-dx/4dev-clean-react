import React from 'react'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state } = React.useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && (<span className={Styles.error} >Carregando...</span>)}
      {mainError && (<span className={Styles.error}>{mainError}</span>)}
    </div>
  )
}

export default FormStatus
