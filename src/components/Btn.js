import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';

const PositionBtn = styled.div`
    margin-top: 8rem;
    padding: 0 3rem 0 3rem
`

const Btn = (props) => {
    return(
        <PositionBtn>
            <Button variant='info' className='ml-5 btn-lg' onClick={props.click}>Next Joke</Button>
        </PositionBtn>
        
    )
}

export default Btn;