import React, { useContext, useEffect, useState } from 'react'
import {
    Div, Div1, Div2, Div3, Div4,
    Nav, Ul, Li, A, Img, Input, I,
    Img1
} from './style.js'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import logout from '../../images/logout.png'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Header = () => {
    const history = useHistory()
    const firebase = useContext(FirebaseContext)

    const [stateLocal, setStateLocal] = useState(false)

    console.log(localStorage)

    const handleClick = () => {
        firebase.signoutCustomer();
        localStorage.removeItem('token');
        history.push('/')
        history.go(0)        
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setStateLocal(true)
        }           
    })

    const button = stateLocal ?
        <a title="Déconnexion" onClick={handleClick}><Img1 src={logout} /></a> :
        <a title="Connexion" href="/login"><Img1 src={login} /></a>;

    return (
        <Div>
            <Div1>
                <Img src={logo} />
            </Div1>
            <Div2>
                <Nav>
                    <Ul>
                        <Li><A href="/">ACCUEIL</A></Li>
                        <Li><A href="#">A PROPOS</A></Li>
                        <Li><A href="#">CONTACT</A></Li>
                        {
                            localStorage.getItem('token') ?
                                <Li><A href="/favoris">FAVORIS</A></Li> :
                                ""
                        }
                    </Ul>
                </Nav>
            </Div2>
            <Div3>
                <Input type="text" placeholder="Search..." />
                <I className="fa fa-search" aria-hidden="true"></I>
            </Div3>
            <Div4>
                { button }  
            </Div4>
        </Div>
    )
}

export default Header