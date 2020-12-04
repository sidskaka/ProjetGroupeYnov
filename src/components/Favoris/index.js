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
  const favorisarticles = localStorage.getItem('favorisarticles')
  var monobjet = JSON.parse(favorisarticles);
  console.log(monobjet)

  return (
    <div>
      <Div>
        <div>
          <Ul>
            {monobjet.map(objet =>
              <Li key={objet.id}>
                <Div1>
                  <A1 href='#'>
                    <Img src={objet.image} alt={objet.image} />
                  </A1>
                </Div1>
                <Div2>
                  <Div21>
                    <H5>{objet.title.substr(0, 15)}...</H5>
                  </Div21>
                  <Div23>
                    <div>
                      <Div231>
                        <A href='#article'>
                          <I className='fa fa-shopping-basket'></I>
                        </A>
                      </Div231>
                    </div>
                  </Div23>
                  <Div22>
                    <P>{objet.description.substr(0, 100)}...</P>
                  </Div22>
                </Div2>
              </Li>
            )}
          </Ul>
        </div>
      </Div>
    </div>
  )
}

export default Favoris
