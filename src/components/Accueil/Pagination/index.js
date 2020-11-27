/* eslint-disable react/prop-types */
import React from 'react'
import { Nav, Ul, Li, A } from './style'

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div style={{ marginTop: '2%' }}>
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
    </div>
  )
}

export default Pagination
