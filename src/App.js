 import React, {useState} from 'react'
 import Header from './components/Header'
 import Joke from './components/Joke'
 import Button from './components/Button'
 
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
        <div>
            <Header />
            <Joke joke={joke}/>
            <Button click={nextJoke}/>
        </div>
    );
};

export default App;