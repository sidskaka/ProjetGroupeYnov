import styled from 'styled-components'

export const Div = styled.div`
  margin-left: '9%';
`
export const Img = styled.img`
  width: 100%;
`
export const Div1 = styled.div`
  width: 11%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.2);
  padding: 35px;
  border: 2px solid #fff;
  border-radius: 20px/50px;
  background-clip: padding-box;
  text-align: center;
  margin-left: 88%;
`
export const Div2 = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  background-color: inherit;

  width: 27%;
  margin-left: 61%;
  height: 500px;
  margin-top: 8%;
  &:target {
    visibility: visible;
    opacity: 1;
  }
`
export const A = styled.a`
  margin-right: 4%;
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
  }
`
export const Div21 = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  position: relative;
  transition: all 5s ease-in-out;
  margin-top: -2%;
  border-radius: 10px;
  margin-left: 0%;
`
