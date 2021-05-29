import React from 'react'
import styled from 'styled-components';
import welcomeBG from '../assets/welcomeBG.jpg'
import Button from 'react-bootstrap/Button'

const Background = styled.div`
    background-image: url(${welcomeBG});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 50pt;
    font-weight: 800;
    text-align: center;

    @media (max-width: 500px){
        font-size:40pt;
    }
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Welcome = (props) =>{        
    return(
        <Background>
            <Container className='p-5 flex justify-content-center shadow-lg bg-white rounded'>
                <Title>Welcome to Geek Jokes App </Title>
                <Button className='btn btn-dark btn-lg' onClick={props.click}>Have fun!</Button> 
            </Container>                       
        </Background>        
    )
}

export default Welcome;