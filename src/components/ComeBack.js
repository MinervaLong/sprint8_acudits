import React from 'react'
import homeIcon from '../assets/home.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Item = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: flex-start;

  @media (max-width: 800px){
    align-self: center;
}
`

const ComeBack = () => {
    return(
      <Item>
        <Link to="/">
          <img src={homeIcon} width='50px'  alt="Come back to welcome page" />
        </Link> 
      </Item>             
    )
}

export default ComeBack;