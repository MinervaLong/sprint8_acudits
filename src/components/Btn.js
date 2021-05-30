import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';

const PositionBtn = styled.div`
    margin-top: 4rem;
    padding: 0 3rem 0 3rem
`

const Btn = ({click}) => {
    return(
        <PositionBtn>
            <Button style={{'background-color':'#55162b'}} className='btn-lg' onClick={click}>Next Joke</Button>
        </PositionBtn>
        
    )
}

export default Btn;