import React, { useState, useContext } from 'react'
import { Div, StyledForm, StyledSpan,
    SigninInput, SigninButton, A,
    StyledError, Div1
} from './style'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Login = () => {
    const history = useHistory()
    const firebase = useContext(FirebaseContext)
    console.log(firebase)
    const data = {
        email: '',
        password: ''
    }

    const [submit, setSubmit] = useState(data)
    const [error, setError] = useState('')

    const handleChange = e => {
        setSubmit({
            ...submit, [e.target.id]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const { email, password } = submit

        firebase.loginCustomer(email, password)
            .then(user => {
                console.log(user)
                setSubmit({ ...data })
                localStorage.setItem('token', user.user.refreshToken)
                history.push('/')
            })
            .catch(err => {
                console.log(err)
                setError(err)
                setSubmit({ ...data })
            })
    }

    const { email, password } = submit;

    const submitButton = email === '' || password === '' ?
        <SigninButton type='submit' disabled>Connexion</SigninButton> : <SigninButton type='submit'>Connexion</SigninButton>;

    const Error = error !== '' && <StyledError>{error.message}</StyledError>

    console.log(Error)

    return (
        <Div>
            <StyledForm onSubmit={handleSubmit}>
                <StyledSpan>Sign in</StyledSpan>
                <SigninInput
                    id='email'
                    placeholder='nom d&apos;utilisateur'
                    value={email}
                    onChange={handleChange}
                    type='email'
                />

                <SigninInput
                    id='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='mot de passe'
                    type='password'
                />

                {Error}
                {submitButton}

            </StyledForm>
            <Div1>
                <A href="/signup">Nouveau ? Inscrivez-vous maintenent</A>
            </Div1>
        </Div>
      )
}

export default Login
