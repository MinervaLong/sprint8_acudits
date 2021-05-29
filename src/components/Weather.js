import React from 'react'

const Weather = (props) => {    
    return(
        <h4>Barcelona's forecast today: {props.weather} with {props.temp} &#x2103;</h4>
    )
}

export default Weather;