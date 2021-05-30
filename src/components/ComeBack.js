import React from 'react'
import homeIcon from '../assets/homeIcon.png'
import {Link} from 'react-router-dom'

const ComeBack = () => {
    return(
      <Link to="/">
          <img src={homeIcon} width='50px'  alt="Come back to welcome page" />
      </Link>        
    )
}

export default ComeBack;