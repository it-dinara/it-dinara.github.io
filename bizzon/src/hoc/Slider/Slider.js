import React from 'react'
import Slick from 'react-slick'
import SlickGlobalStyle from './styled'

const Slider = props => (
  <React.Fragment>
    <SlickGlobalStyle />
    <Slick {...props} />
  </React.Fragment>
)

export default Slider
