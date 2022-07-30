import React from 'react'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <span className={Styles.error}>Error</span>
    </div>
  )
}

export default FormStatus
