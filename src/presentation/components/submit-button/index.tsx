import formContext from '@/presentation/contexts/form/form-context'
import React, { useContext } from 'react'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }) => {
  const { state } = useContext(formContext)
  return (
    <button data-testid="submit" disabled={state.isFormInvalid} type="submit">{text}</button>
  )
}

export default SubmitButton
