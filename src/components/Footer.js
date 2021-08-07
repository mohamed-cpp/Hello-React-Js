import React, {useContext} from 'react'
import {useIntl} from 'react-intl'
import { Link } from 'react-router-dom'
import Button from './Parts/Button'
import {Context} from "./Context/Wrapper"

const Footer = () => {
  const context = useContext(Context)
  const intl = useIntl()
  return (
    <footer>
      <p>Copyright &copy; { new Date().getFullYear()}</p>
      <Button color="blue" doAction={() => {context.selectLanguage()}} text={intl.formatMessage({id:'changelang'})} />
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer
