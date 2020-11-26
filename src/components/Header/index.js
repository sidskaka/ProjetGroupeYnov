import React from 'react'
import {
    Div, Div1, Div2, Div3, Div4,
    Nav, Ul, Li, A, Img, Input, I,
    Img1
} from './style.js'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import logout from '../../images/logout.png'
//import Logout from '../Logout'

const Header = () => {
    return (
        <Div>
            <Div1>
                <Img src={logo} />
            </Div1>
            <Div2>
                <Nav>
                    <Ul>
                        <Li><A href="/">Accueil</A></Li>
                        <Li><A href="#">A propos</A></Li>
                        <Li><A href="#">Contact</A></Li>
                    </Ul>
                </Nav>
            </Div2>
            <Div3>
                <Input type="text" placeholder="Search..." />
                <I className="fa fa-search" aria-hidden="true"></I>
            </Div3>
            <Div4>
                <a href="/logout"><Img1 src={logout} /></a>
                <a href="/login"><Img1 src={login} /></a>
            </Div4>
        </Div>
    )
}

export default Header