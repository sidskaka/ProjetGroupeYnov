import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
    height: 85px;
`
export const Div1 = styled.div`
    float: left;
    width: 20%;
`
export const Div2 = styled.div`
    float: left;
    width: 40%;
    @media only screen and (max-width:890px) {
        display: none;
    }
`
export const Div3 = styled.div`
    float: left;
    width: 20%;
    margin-top: 20px;
    @media only screen and (max-width:890px) {
        float: left;
        width: 56%;
        margin-top: 20px;
        margin-left: 3%;
    }
`
export const Div4 = styled.div`
    float: left;
    width: 20%;
`
export const Nav = styled.nav`

`
export const Ul = styled.ul`
    margin-top: 4%;
`
export const Li = styled.li`
    display: inline;
    text-decoration: none;
    liste-style: none;
    margin-left: 10%;
`
export const A = styled.a`
    font-weight: 700;
    font-size: 160%;
    letter-spacing: 0.87px;
    color: #000;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    &:hover {
        color: #000;
    }
`
export const Img = styled.img`
    width: 50%;
    margin-left: 32%;
    @media only screen and (max-width:890px) {
        margin-top: 14%;
    }
`
export const Input = styled.input`
    width: 70%;
    height: 35px;
    border-radius: 15px;
    border: 0px solid;
    
    visibility: visible;
    background: #f5f5f5;
    cursor: text;
    color: inherit;
    padding: 8px 50px 8px 13px;
    margin: 0 70px 0 0;
    transition: background .15s,color .35s .5s;
`
export const I = styled.i`
    margin-left: -31%;
    @media only screen and (max-width:1400px) {
        margin-left: -40%;
    }
    @media only screen and (max-width:1090px) {
        margin-left: -50%;
    }
    @media only screen and (max-width:890px) {
        margin-left: -22%;
    }
    @media only screen and (max-width:750px) {
        margin-left: -35%;
    }
    @media only screen and (max-width:458px) {
        margin-left: -44%;
    }
    @media only screen and (max-width:370px) {
        margin-left: -51%;
    }
    @media only screen and (max-width:327px) {
        margin-left: -65%;
    }
`
export const Img1 = styled.img`
    width: 20%;
    margin-top: 4%;
    margin-left: -5%;
    @media only screen and (max-width:1200px) {
        margin-top: 6%;
        width: 22%;
        margin-left: -17%;
    }
    @media only screen and (max-width:1100px) {
        margin-top: 9%;
    }
    @media only screen and (max-width:900px) {
        margin-top: 12%;
        width: 30%;
    }
    @media only screen and (max-width:700px) {
        margin-top: 12%;
        width: 35%;
    }
`
