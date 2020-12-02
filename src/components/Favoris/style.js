import styled from 'styled-components'

export const Div = styled.div`
  margin-left: 9%;
  height: 602px;
`
export const Ul = styled.ul`
  display: block;
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-left: 34%;
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
    width: 37.5%;
    height: auto;
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
export const A1 = styled.a`
  text-decoration: none;
  display: block;
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
export const Div2 = styled.div``
export const Div21 = styled.div`
  float: left;
  width: 100%;
  text-transform: uppercase;
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
export const Div23 = styled.div`
  @media only screen and (min-width: 480px) {
    float: left;
    text-align: center;
    width: 100%;
    margin-top: 5%;
  }
`
export const Div231 = styled.div`
  width: 15%;
  background-color: #cccccc61;
  height: 36px;
  border-radius: 19px;
  margin-left: 27%;
`
export const A = styled.a`
  text-decoration: none;
  display: block;
  padding: 18%;
`
export const I = styled.i`
  font-size: 170%;
  margin-top: -12%;
`
export const Div232 = styled.div`
  float: left;
  width: 15%;
  background-color: #cccccc61;
  height: 39px;
  border-radius: 19px;
  margin-left: 56%;
  margin-top: -11%;
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
export const Div22 = styled.div`
  @media only screen and (min-width: 480px) {
    text-align: center;
  }
`
export const P = styled.p``
