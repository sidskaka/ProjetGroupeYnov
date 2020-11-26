import styled from 'styled-components'

export const StyledError = styled.span`
  font-size: 112%;
  color: #ff0000;
`
export const Div = styled.div`
  width: 100%;
  padding-bottom: 7%;
`
export const StyledSpan = styled.span`
  color: #00000052;
  margin-bottom: 12px;
  font-size: 220%;
`
export const StyledForm = styled.form`
  margin-top: 3%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SigninInput = styled.input`
  width: 23%;
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  height: 30px;
  color: white;
  padding: 0px 6px;
  @media only screen and (max-width: 980px) {
    width: 27%;
  }
  @media only screen and (max-width: 740px) {
    width: 35%;
  }
  @media only screen and (max-width: 550px) {
    width: 48%;
  }
  @media only screen and (max-width: 390px) {
    width: 59%;
  }
`
export const SigninButton = styled.button`
  width: 12%;
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  height: 30px;
  color: white;
  padding: 0px 6px;
  @media only screen and (max-width: 980px) {
    width: 16%;
  }
  @media only screen and (max-width: 740px) {
    width: 19%;
  }
  @media only screen and (max-width: 550px) {
    width: 25%;
  }
  @media only screen and (max-width: 390px) {
    width: 34%;
  }
`
export const A = styled.a`
  text-decoration: none;
  font-size: 19px;
  color: #000;
  margin: auto 39%;
  &:hover {
    text-decoration: none;
  }
`
export const Div1 = styled.div`
  width: 100%;
  margin-top: 3%;
`
