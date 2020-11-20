/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Login = ({ submit }) => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  return (
    <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
      <StyledSpan>Signin</StyledSpan>
      <SigninInput
        placeholder='Username'
        onChange={e => setFormState({ ...formState, username: e.target.value })}
        type='text'
      ></SigninInput>
      <SigninInput
        placeholder='password'
        onChange={e => setFormState({ ...formState, password: e.target.value })}
        type='password'
      ></SigninInput>
      <StyledSpan>{errorMessage}</StyledSpan>
      <SigninInput type='submit'></SigninInput>
    </StyledForm>
  )
}

const StyledSpan = styled.span`
  color: green;
  margin-bottom: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SigninInput = styled.input`
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  height: 30px;
  color: white;
  padding: 0px 6px;
`

export default Login
