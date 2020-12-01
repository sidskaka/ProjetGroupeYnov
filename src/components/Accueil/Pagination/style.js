import styled from 'styled-components'

export const Div = styled.div`
  margin-top: 2%;
`
export const Nav = styled.nav`
  display: block;
  &:before {
    box-sizing: border-box;
  }
  &:after {
    box-sizing: border-box;
  }
`
export const Ul = styled.ul`
  margin-right: -1%;
  padding-left: 46.5%;
  display: flex;
  list-style: none;
  border-radius: 0.25rem;
`
export const A = styled.a`
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
`
export const Li = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  &:first-child ${A} {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`
