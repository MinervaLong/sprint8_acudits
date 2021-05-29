 import React, {useState, useEffect} from 'react'
 import MainComponent from './components/MainComponent'
 import Welcome from './components/Welcome' 
 import axios from 'axios' 
 import {getApiKey} from '../apikey'
 
 //URL APIs
 const API_KEY = getApiKey()
 const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=Barcelona,ES&units=metric&APPID=${API_KEY}`; 
 const fetchUrlJokes = 'https://geek-jokes.sameerkumar.website/api'

 const App = () => {
    //Call to Joke API
    const [joke, setJoke] = useState('')
    const getJoke = () => fetch(fetchUrlJokes)
    .then((response) => response.json())
    .then((joke)=> setJoke(joke))

    const nextJoke = () => {
        getJoke()        
    }

    //Call to Weather API with Axios
     const [weather, setWeather] = useState('');
     const [temp, setTemp] = useState('')
     useEffect(async () => {        
        const result = await axios.get(weatherUrl) 
        const {description} = result.data.weather[0]
        const {temp} = result.data.main
        setWeather(description)
        setTemp(temp)
      },[]);

    //Conditional rendering
    const [currentView, setCurrentView] = useState('welcome')

    const handleClick = () => {
        setCurrentView('main')
    }    

    return ( 
        <div>
            {currentView === 'welcome' && <Welcome click={handleClick} />}
            {currentView === 'main' &&             
                <MainComponent joke={joke} weather={weather} temp={temp} click={nextJoke}/>
            }     
        </div>
    );
};

export default App;