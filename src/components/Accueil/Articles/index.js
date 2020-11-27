/* eslint-disable react/prop-types */
import React from 'react'
import axios from 'axios'
import {
  Div21,
  Img,
  Div1,
  Li,
  Ul,
  A1,
  I,
  P,
  Div23,
  Div2,
  A,
  H5,
  Div22,
  Div231,
  Div232
} from './style'

const favorisClick = id => {
  localStorage.setItem('id', id)
  axios({
    method: 'GET',
    url: `https://fakestoreapi.com/products/${id}`
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

// eslint-disable-next-line react/prop-types
const Recipes = ({ articles }) => {
  return (
    <Ul>
      {articles.map(article => (
        <Li key={article.id}>
          <Div1>
            <A1 href='#'>
              <Img src={article.image} alt={article.image} />
            </A1>
          </Div1>
          <Div2>
            <Div21>
              <H5>{article.title.substr(0, 15)}...</H5>
            </Div21>
            <Div23>
              {localStorage.getItem('token') ? (
                <div>
                  <Div231>
                    <A onClick={() => favorisClick(article.id)}>
                      <I className='fa fa-heart'></I>
                    </A>
                  </Div231>
                  <Div232>
                    <A href='#'>
                      <I className='fa fa-shopping-basket'></I>
                    </A>
                  </Div232>
                </div>
              ) : (
                ''
              )}
            </Div23>
            <Div22>
              <P>{article.description.substr(0, 100)}...</P>
            </Div22>
          </Div2>
        </Li>
      ))}
    </Ul>
  )
}

export default Recipes
