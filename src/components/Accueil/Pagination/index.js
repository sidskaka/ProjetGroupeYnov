/* eslint react/prop-types: 0 */
import React from 'react'
import { Nav, Ul, Li, A, Div } from './style'

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Div>
      <Nav>
        <Ul>
          {pageNumbers.map(number => (
            <Li key={number}>
              <A
                onClick={e => {
                  e.preventDefault()
                  paginate(number)
                }}
                href='/!#'
              >
                {number}
              </A>
            </Li>
          ))}
        </Ul>
      </Nav>
    </Div>
  )
}

export default Pagination
