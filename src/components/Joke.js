import React from 'react'
 
const Joke = ({joke}) => {
    return(
        <p className="my-4 mr-auto position-absolute font-weight-bold font-italic">{joke}</p>        
    )
}

export default Joke;