import React from 'react'
import Header from './Header'
import Joke from './Joke'
import Btn from './Btn'
import Weather from './Weather'
import ComeBack from './ComeBack'
import styled from 'styled-components';

const Main = styled.main`
    background: #F7D863; 
    padding-left: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    @media (max-width: 800px){
        padding-left: 0rem;
    }
`
const Container = styled.div`
    width: 30rem;
    height: 30rem;
    background: #FFFFFF;
    border: 5px solid #FFFFFF;
    border-radius: 50%;
    box-shadow: -12px -2px 109px -17px rgba(123,109,109);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 800px){
        width: 100%;
        height: 100%;
        border-radius: 0%;
    }
`

const MainComponent = ({weather, temp, joke, click}) => {
    return(
        <Main>
            <ComeBack />            
            <Container >
                <Header />
                <Joke joke={joke}/>
                <Btn click={click}/>                                      
            </Container>
            <Weather weather={weather} temp={temp}/>
        </Main>
    )
}

export default MainComponent;

