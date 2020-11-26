import React, { useState } from 'react'
import { Div, StyledForm, StyledSpan,
    SigninInput, SigninButton, A, Div1
} from './style'
import { useHistory } from 'react-router-dom'

const Login = ({ submit }) => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

    return (
        <Div>
            <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
                <StyledSpan>Sign in</StyledSpan>
                <SigninInput
                    placeholder='Username'
                    onChange={e => setFormState({ ...formState, username: e.target.value })}
                    type='text'
                />

                <SigninInput
                    placeholder='password'
                    onChange={e => setFormState({ ...formState, password: e.target.value })}
                    type='password'
                />

                <StyledSpan>{errorMessage}</StyledSpan>
                <SigninButton type='submit'>Connexion</SigninButton>
            </StyledForm>
            <Div1>
                <A href="/signup">Nouveau ? Inscrivez-vous maintenent</A>
            </Div1>
        </Div>
      )
}

export default Login
