/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Div,
  StyledForm,
  StyledSpan,
  SigninInput,
  SigninButton,
  Div1,
  A
} from './style'
import { useHistory } from 'react-router-dom'

const Signup = ({ submit }) => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  return (
    <Div>
      <StyledForm
        onSubmit={e => submit(e, formState, setErrorMessage, history)}
      >
        <StyledSpan>Sign up</StyledSpan>
        <SigninInput
          placeholder='Username'
          onChange={e =>
            setFormState({ ...formState, username: e.target.value })
          }
          type='text'
        />

        <SigninInput
          placeholder='Email'
          onChange={e => setFormState({ ...formState, email: e.target.value })}
          type='email'
        />

        <SigninInput
          placeholder='Password'
          onChange={e =>
            setFormState({ ...formState, password: e.target.value })
          }
          type='password'
        />

        <SigninInput placeholder='Password confirmed' type='password' />

        <StyledSpan>{errorMessage}</StyledSpan>
        <SigninButton type='submit'>Connexion</SigninButton>
      </StyledForm>
      <Div1>
        <A href='/login'>Deja membre ? Veuillez-vous connecter</A>
      </Div1>
    </Div>
  )
}

export default Signup
