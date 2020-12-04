/* eslint react/prop-types: 0 */
import React, { useState } from 'react'
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
  Div233,
  Div,
  Div11,
  A2,
  Div111,
  Div232,
  H1,
  Img1
} from './style'

// eslint-disable-next-line react/prop-types
const Recipes = ({ articles }) => {
  const [articlepopup, setArticlepopup] = useState([])

  const popupFunc = id => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`
    })
      .then(res => {
        //console.log(res)
        setArticlepopup(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  var monarticle = []

  const favorisClick = id => {
    var idarticle = {}
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/${id}`
    })
      .then(res => {
        var id = res.data.id
        var description = res.data.description
        var image = res.data.image
        var title = res.data.title
        idarticle = {
          id: id,
          description: description,
          image: image,
          title: title
        }
        monarticle.push(idarticle)
        var monobjet_json = JSON.stringify(monarticle)

        localStorage.setItem('favorisarticles', monobjet_json)
        console.log(monarticle)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Div id='article'>
        <Div11>
          <A2 href='#'>&times;</A2>
          <Div111>
            <Img1 src={articlepopup.image} alt={articlepopup.image} />
            <H1>{articlepopup.title}</H1>
            <p>{articlepopup.description}</p>
          </Div111>
        </Div11>
      </Div>
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
                  <Div233>
                    <A href='#article' onClick={() => popupFunc(article.id)}>
                      <I className='fa fa-eye'></I>
                    </A>
                  </Div233>
                )}
              </Div23>
              <Div22>
                <P>{article.description.substr(0, 100)}...</P>
              </Div22>
            </Div2>
          </Li>
        ))}
      </Ul>
    </>
  )
}

export default Recipes
