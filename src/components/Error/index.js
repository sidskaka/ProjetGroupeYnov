import React from 'react'
import error from '../../images/Error.png'
import { Div, Div1, Span1, Span2, Div2, Img } from './style'

const Error = () => {
  return (
    <Div>
      <Div1>
        <Span1>Oups !</Span1>
        <br />
        <Span2>La page que vous recherchez semble introuvable.</Span2>
      </Div1>
      <Div2>
        <Img src={error} />
      </Div2>
    </Div>
  )
}

export default Error
