import React from 'react';
import '../../css/fatal.css'
import errorImage from '../../assets/error.png'

const Fatal = (props) => (
  <div className='center fatal'>
    <img src={ errorImage } alt='error' />
    <h1> { props.mensaje } </h1>
  </div>
)

export default Fatal