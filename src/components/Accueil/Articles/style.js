import styled from 'styled-components'

export const Img1 = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 14%;

  display: block;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;

  &:hover {
    -o-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }

  @media only screen and (min-width: 480px) {
    max-height: 100%;
    display: inline-block;
  }
`
export const H1 = styled.h1`
  margin-top: 10%;
`
export const Div111 = styled.div`
  max-height: 30%;
  overflow: auto;
  height: 500px;
`
export const A2 = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #06d85f;
    text-decoration: none;
  }
`
export const Div11 = styled.div`
  height: auto;
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 44%;
  position: relative;
  transition: all 5s ease-in-out;
`
export const Div = styled.div`
  width: 94%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  height: auto;
  z-index: 1;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`
export const Div233 = styled.div`
  width: 40%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
`
export const Img = styled.img`
  max-width: 100%;
  height: auto;

  display: block;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;

  &:hover {
    -o-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
    transform: scale(1.2, 1.2);
  }

  @media only screen and (min-width: 480px) {
    max-height: 100%;
    display: inline-block;
  }
`
export const Ul = styled.ul`
  display: block;
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: 11%;
`
export const Li = styled.li`
  display: inline-block;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  position: relative;

  @media only screen and (min-width: 480px) {
    width: 49%;
    margin: 1%;
  }
  @media only screen and (min-width: 678px) {
    width: 32.5%;
  }
  @media only screen and (min-width: 992px) {
    width: 24.25%;
  }
  @media only screen and (min-width: 1200px) {
    width: 19.5%;
  }
`
export const Div1 = styled.div`
  position: relative;
  overflow: hidden;

  &:hover {
    bottom: 0;
  }

  @media only screen and (min-width: 480px) {
    height: 300px;
    float: left;
    width: 100%;
    text-align: center;
  }
`
export const I = styled.i`
  font-size: 170%;
`
export const A = styled.a`
  text-decoration: none;
  display: block;
  padding: 18%;
`
export const A1 = styled.a`
  text-decoration: none;
  display: block;
`
export const Div21 = styled.div`
  float: left;
  width: 100%;
  text-transform: uppercase;
`
export const Button = styled.button`
  border-radius: 13px;
  background-color: inherit;
`
export const Div231 = styled.div`
  width: 19%;
  background-color: #cccccc61;
  height: 39px;
  border-radius: 19px;
  margin-left: 27%;
`
export const Div232 = styled.div`
  float: left;
  width: 19%;
  background-color: #cccccc61;
  height: 39px;
  border-radius: 19px;
  margin-left: 56%;
  margin-top: -16%;
`
export const Div23 = styled.div`
  @media only screen and (min-width: 480px) {
    float: left;
    text-align: center;
    width: 100%;
  }
`
export const H5 = styled.h5`
  @media only screen and (min-width: 480px) {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1;
    padding: 10px 0 0;
    text-align: center;
  }
`
export const P = styled.p``
export const Div2 = styled.div``
export const Div22 = styled.div`
  @media only screen and (min-width: 480px) {
    text-align: center;
  }
`
