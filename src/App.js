 import React, {useState} from 'react'
 import Header from './components/Header'
 import Joke from './components/Joke'
 import Btn from './components/Btn'
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'
 import styled from 'styled-components';
 
 const Main = styled.main`
    background: #2980B9; 
    background: linear-gradient(to bottom, #FFFFFF, #6DD5FA, #2980B9);
    padding-top:5rem;
    height: 100vh;
 `

 const fetchUrlJokes = 'https://geek-jokes.sameerkumar.website/api'
 
 const App = () => {
    const [joke, setJoke] = useState(null)

    const getJoke = () => fetch(fetchUrlJokes)
    .then((response) => response.json())
    .then((joke)=> setJoke(joke))

    const nextJoke = () => {
        getJoke()        
    }

    return (
        <Main>
        <Container className='p-5 flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
            <Row className="justify-content-md-center position-relative">
                <Col xs lg='1' className='p-0'></Col>
                <Col md='6' lg='4' className='p-0'>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Joke joke={joke}/>
                    </Row>                  
                    <Row>
                        <Btn click={nextJoke}/>
                    </Row>
                    
                </Col>
                <Col xs lg='1' className='p-0'></Col>
            </Row>
                      
        </Container>
        </Main>
    );
};

export default App;