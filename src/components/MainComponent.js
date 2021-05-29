import React from 'react'
import Header from './Header'
import Joke from './Joke'
import Btn from './Btn'
import Weather from './Weather'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Main = styled.main`
    background: #2980B9; 
    background: linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9);
    padding-top:3rem;
    height: 100vh;
`

const MainComponent = (props) => {
    return(
        <Main>
            <Weather weather={props.weather} temp={props.temp}/>
            <Container className='p-5 flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
                <Row className="justify-content-md-center position-relative">
                    <Col xs lg='1' className='p-0'></Col>
                    <Col md='6' lg='4' className='p-0'>
                        <Row>
                            <Header />
                        </Row>
                        <Row>
                            <Joke joke={props.joke}/>
                        </Row>                  
                        <Row>
                            <Btn click={props.click}/>
                        </Row>                        
                    </Col>
                    <Col xs lg='1' className='p-0'></Col>
                </Row>                      
            </Container>
        </Main>
    )
}

export default MainComponent;

