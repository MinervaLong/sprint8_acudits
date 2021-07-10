import React from 'react'
 
const Joke = ({joke}) => {
    return(
        <p className="pl-2 pr-2 position-absolute font-weight-bold font-italic text-justify">{joke}</p>        
    )
}

export default Joke;