import React from 'react'

const description = (props) => {
    
    
    return(
        <div>
            <div>NAME: <span style={{color:'orange'}}>{props.name}</span></div>
            <div>GENDER: <span style={{color:'orange'}}>{props.gender}</span></div>
            <div>HEIGHT: <span style={{color:'orange'}}>{props.height}</span></div>
            <div>MASS: <span style={{color:'orange'}}>{props.mass}</span></div>
            <div>HAIR: <span style={{color:'orange'}}>{props.hair_color}</span></div>
            <div>SKIN CLR: <span style={{color:'orange'}}>{props.skin_color}</span></div>
        </div>
        
    
    )
    
}

export default description