import React from 'react'
import Styles from './footer-styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer} />
  )
}

export default React.memo(Footer)
