import React, { useContext, useEffect, useState } from 'react'
import {
  Div,
  Div1,
  Div2,
  Div3,
  Div4,
  Nav,
  Ul,
  Li,
  A,
  Img,
  Input,
  I,
  Img1,
  A1
} from './style.js'
import en from '../../images/en.png'
import fr from '../../images/fr.png'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import logout from '../../images/logout.png'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import { useTranslation } from 'react-i18next'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../globalStyles'
import { lightTheme, darkTheme } from '../Themes'

const Header = () => {
  const history = useHistory()
  const firebase = useContext(FirebaseContext)

  const [stateLocal, setStateLocal] = useState(false)
  const [t, i18n] = useTranslation()

  const handleClick = () => {
    firebase.signoutCustomer()
    localStorage.removeItem('token')
    history.push('/')
    history.go(0)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setStateLocal(true)
    }
  })

  const button = stateLocal ? (
    <A1 title='D�connexion' onClick={handleClick}>
      <Img1 src={logout} />
    </A1>
  ) : (
    <A1 title='Connexion' href='/login'>
      <Img1 src={login} />
    </A1>
  )

  const [theme, setTheme] = useState('light')
  const [oldTheme, setOldTheme] = useState('SOMBRE')
  const themeToggler = () => {
    theme === 'light' ? setTheme('SOMBRE') : setTheme('light')
    oldTheme === 'SOMBRE' ? setOldTheme('LUMIERE') : setOldTheme('SOMBRE')
  }

  return (
    <Div>
      <Div1>
        <Img src={logo} />
      </Div1>
      <Div2>
        <Nav>
          <Ul>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <>
                <GlobalStyles />
                <Li>
                  <A onClick={themeToggler}><i style={{fontSize: "132%"}} class="fa fa-lightbulb-o"></i></A>
                </Li>
                <Li>
                  <A href='/'>{t('accueil')}</A>
                </Li>
                <Li>
                  <A href='#'>{t('apropos')}</A>
                </Li>
                <Li>
                  <A href='#'>{t('contact')}</A>
                </Li>
                {localStorage.getItem('token') ? (
                  <Li>
                    <A href='/favoris'>{t('favoris')}</A>
                  </Li>
                ) : (
                  ''
                )}
              </>
            </ThemeProvider>
          </Ul>
        </Nav>
      </Div2>
      <Div3>
        <Input type='text' placeholder={t('recherche')} />
        <I className='fa fa-search' aria-hidden='true'></I>
      </Div3>
      <Div4>
        <a onClick={() => { i18n.changeLanguage('fr') }}><img style={{ width: "10%" }} src={fr} /></a>&nbsp;&nbsp;
        <a onClick={() => { i18n.changeLanguage('en') }}><img style={{ width: "28px" }} src={en} /></a>
        {button}
      </Div4>
    </Div>
  )
}

export default Header
