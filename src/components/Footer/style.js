import styled from 'styled-components'

export const MyFooter = styled.footer`
  background-color: #26272b;
  padding: 45px 0 -1px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  margin-top: 0%;
  height: 330px;
  @media only screen and (max-width: 1199px) {
    height: 340px;
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 0;
  }
  @media only screen and (max-width: 790px) {
    height: 510px;
  }
  @media only screen and (max-width: 768px) {
    height: 545px;
  }
  @media (max-width: 581px) {
    height: 570px;
  }
  @media (max-width: 481px) {
    height: 650px;
  }
  @media (max-width: 388px) {
    height: 680px;
  }
  @media (max-width: 360px) {
    height: 730px;
  }
  @media (max-width: 344px) {
    height: 750px;
  }
`

export const H6 = styled.h6`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px

  margin-top: 10px;
  margin-bottom: 10px;

  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
`
export const A = styled.a`
  color: #737373;
  &:hover {
    color: #3366cc;
    text-decoration: none;
  }
  &:active {
    color: #3366cc;
    text-decoration: none;
  }
  &:focus {
    color: #3366cc;
    text-decoration: none;
  }
`
export const A1 = styled.a`
  color: #737373;

  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear

  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius:100%;
  background-color: #33353d;
  &:hover {
    color: #3366cc;
    text-decoration: none;
    background-color: #3b5998;
  }
  &:active {
    color: #fff;
    background-color: #29aafe
  }
  &:focus {
    color: #fff;
    background-color: #29aafe;
  }
`
export const A2 = styled.a`
  color: #737373;

  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;

  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d
  &:hover {
    color: #3366cc;
    text-decoration: none;
    background-color: #00aced;
  }
  &:active {
    color: #fff;
    background-color: #29aafe;
  }
  &:focus {
    color: #fff;
    background-color: #29aafe;
  }
`
export const A3 = styled.a`
  color: #737373;

  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;

  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
  &:hover {
    color: #3366cc;
    text-decoration: none;
    background-color: #ea4c89;
  }
  &:active {
    color: #fff;
    background-color: #29aafe;
  }
  &:focus {
    color: #fff;
    background-color: #29aafe;
  }
`
export const A4 = styled.a`
  color: #737373;

  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;

  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
  &:hover {
    color: #3366cc;
    text-decoration: none;
    background-color: #007bb6;
  }
  &:active {
    color: #fff;
    background-color: #29aafe;
  }
  &:focus {
    color: #fff;
    background-color: #29aafe;
  }
`
export const Ul1 = styled.ul`
  padding-left: 0;
  list-style: none;

  margin-top: 0;
  margin-bottom: 10px;
`
export const Li1 = styled.li`
  display: block;
`
export const P = styled.p`
  margin: 0;
  @media only screen and (max-width: 790px)
    text-align: center;
  }
  @media (max-width: 360px) {
    text-align: center;
  }
  @media (max-width: 630px) {
    margin-top: -8%;
    text-align: center;
  }
`
export const Ul2 = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  margin-top: 0;
  margin-bottom: 10px;
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
  @media only screen and (min-width: 372px) {
    margin-left: 29%;
  }
  @media only screen and (max-width: 371px) {
    margin-left: 15%;
  }
`
export const Li2 = styled.li`
  display: inline-block;
  margin-bottom: 4px;
  @media only screen and (max-width: 767px) {
    display: inline;
    margin-right: 0;
    font-weight: 600;
  }
`
export const Div1 = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 1170px;
    margin-left: 14%;
  }
  @media only screen and (max-width: 1199px) {
    width: 970px;
    margin-left: 14%;
  }
  @media only screen and (max-width: 991px) {
    width: 1080px;
    margin-left: 6%;
  }
`
export const Div2 = styled.div`
  margin-right: -15px;
  margin-left: -15px;

  height: 38px;
  margin-top: 5%;
`
export const Div11 = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  @media only screen and (max-width: 790px) {
    width: 67%;
  }
  @media only screen and (max-width: 670px) {
    padding: 1%;
  }
  @media only screen and (max-width: 730px) {
    padding: 1%;
  }
`
export const Div3 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 3%;
  float: left;
  width: 45%;
  @media only screen and (max-width: 790px) {
    width: 95%;
  }
  @media only screen and (max-width: 730px) {
    width: 73%;
  }
  @media only screen and (max-width: 580px) {
    width: 62%;
  }
  @media only screen and (max-width: 480px) {
    width: 46%;
  }
  @media only screen and (max-width: 360px) {
    width: 33%;
  }
`
export const P1 = styled.p`
  text-align: justify;
  margin: 0 0 10px;
`
export const Div4 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  margin-top: 3%;
  @media (min-width: 992px) {
    width: 25%;
    float: left;
  }
  @media only screen and (max-width: 790px) {
    width: 40%;
  }
  @media only screen and (max-width: 481px) {
    width: 55%;
  }
  @media only screen and (max-width: 360px) {
    width: 68%;
  }
`
export const Div5 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
  margin-top: 3%;
  @media (min-width: 992px) {
    width: 25%;
    float: left;
  }
  @media only screen and (max-width: 790px) {
    padding: 4%;
    margin-top: -1%;
  }
  @media only screen and (max-width: 790px) {
    width: 31%;
  }
  @media only screen and (max-width: 481px) {
    width: 26%;
    margin-left: -29%;
  }
  @media only screen and (max-width: 360px) {
    margin-left: -54%;
  }
`
export const Div6 = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -3%;
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (max-width: 360px) {
    margin-top: 120%;
  }
`
export const Div21 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    width: 66.66666667%;
    float: left;
  }
  @media (min-width: 768px) {
    width: 50%;
    float: left;
  }
  @media only screen and (max-width: 790px) {
    width: 90%;
    margin-left: 3%;
    margin-top: -6%;
  }
`
export const Div22 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 992px) {
    width: 33.33333333%;
    float: left;
  }
  @media (min-width: 768px) {
    width: 50%;
    float: left;
  }
  @media (max-width: 767px) {
    margin-top: -6%;
    margin-left: 36%;
  }
  @media (max-width: 630px) {
    margin-top: 0%;
    margin-left: -27%;
  }
`
export const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  padding: 2%;
  padding-left: 20%;
  width: 60%;
  margin-left: 0%;
  @media only screen and (max-width: 991px) {
    width: 48%;
  }
  @media only screen and (max-width: 859px) {
    width: 44%;
  }
  @media only screen and (max-width: 790px) {
    width: 38%;
  }
  @media only screen and (max-width: 730px) {
    width: 24%;
    margin-top: 38%;
    margin-left: 10px;
  }
  @media only screen and (max-width: 670px) {
    width: 24%;
    margin-top: 38%;
  }
  @media only screen and (max-width: 581px) {
    width: 16%;
    margin-top: 40%;
  }
  @media only screen and (max-width: 481px) {
    width: 6%;
    margin-top: 47%;
  }
  @media only screen and (max-width: 360px) {
    display: none;
  }
`
