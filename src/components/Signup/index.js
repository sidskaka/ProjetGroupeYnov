import React, { useState, useContext } from 'react'
import {
  Div,
  StyledForm,
  StyledSpan,
  SigninInput,
  SigninButton,
  Div1,
  A,
  StyledError
} from './style'
import { FirebaseContext } from '../Firebase'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Signup = () => {
  const history = useHistory()
  const firebase = useContext(FirebaseContext)
  console.log(firebase)
  const data = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  const [submit, setSubmit] = useState(data)
  const [error, setError] = useState('')
  const [t] = useTranslation()

  const handleChange = e => {
    setSubmit({
      ...submit,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    const { email, password } = submit

    firebase
      .signupCustomer(email, password)
      .then(user => {
        console.log(user.user.refreshToken)
        setSubmit({ ...data })
        localStorage.setItem('token', user.user.refreshToken)
        history.push('/')
        location.reload()
      })
      .catch(err => {
        console.log(err)
        setError(err)
        setSubmit({ ...data })
      })
  }

  const { username, email, password, passwordConfirm } = submit

  const submitButton =
    username === '' ||
    email === '' ||
    password === '' ||
    password !== passwordConfirm ? (
      <SigninButton type='submit' disabled>
        Connexion
      </SigninButton>
    ) : (
      <SigninButton type='submit'>Connexion</SigninButton>
    )

  const Error = error !== '' && <StyledError>{error.message}</StyledError>

  console.log(Error)

  return (
    <Div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSpan>{t('enregistrer')}</StyledSpan>
        <SigninInput
          id='username'
          value={username}
          onChange={handleChange}
          placeholder={t('nomutilisateur')}
          type='text'
        />

        <SigninInput
          id='email'
          value={email}
          onChange={handleChange}
          placeholder='Email'
          type='email'
        />

        <SigninInput
          id='password'
          value={password}
          onChange={handleChange}
          placeholder={t('motdepasse')}
          type='password'
        />

        <SigninInput
          id='passwordConfirm'
          value={passwordConfirm}
          onChange={handleChange}
          placeholder={t('motdepasseconf')}
          type='password'
        />
        {Error}
        {submitButton}
      </StyledForm>
      <Div1>
        <A href='/login'>{t('lienenregistrer')}</A>
      </Div1>
    </Div>
  )
}

export default Signup
