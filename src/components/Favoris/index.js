import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Div,
  Ul,
  Li,
  Div1,
  A1,
  Img,
  Div2,
  Div21,
  H5,
  Div23,
  Div231,
  A,
  I,
  Div232,
  Div22,
  P
} from './style.js'

const Favoris = () => {
  const [article, setArticle] = useState([])
  const id = localStorage.getItem('id')
  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`
    })
      .then(res => {
        console.log(res.data.description.substr(0, 120),"...")
        setArticle(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Div>
        <div>
          <Ul>
            <Li key={article.id}>
              <Div1>
                <A1 href='#'>
                  <Img src={article.image} alt={article.image} />
                </A1>
              </Div1>
              <Div2>
                <Div21>
                  <H5>{article.title}</H5>
                </Div21>
                <Div23>
                  <div>
                    <Div231>
                      <A href='#article'>
                        <I className='fa fa-eye'></I>
                      </A>
                    </Div231>
                    <Div232>
                      <A href='#'>
                        <I className='fa fa-shopping-basket'></I>
                      </A>
                    </Div232>
                  </div>
                </Div23>
                <Div22>
                  <P>{article.description}</P>
                </Div22>
              </Div2>
            </Li>
          </Ul>
        </div>
      </Div>
    </div>
  )
}

export default Favoris
