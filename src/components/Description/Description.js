import React from 'react'

const description = (props) => {
    
    
    return(
        <div>
            <div>Imię: {props.name}</div>
            <div>Płeć: {props.gender}</div>
            <div>Waga: {props.mass}</div>
        </div>
        
    
    )
    
}

export default description