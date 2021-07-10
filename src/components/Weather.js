import React from 'react'

const Weather = ({weather, temp}) => {    
    return(
        <h4 className="mt-3">Barcelona's forecast today 🌍: {weather} with {temp} &#x2103;🌡️</h4>
    )
}

export default Weather;