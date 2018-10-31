import React from 'react'

const description = (props) => {
    
    
    return(
        <div>
            <div>name: <span style={{color:'orange'}}>{props.name}</span></div>
            <div>gender: <span style={{color:'orange'}}>{props.gender}</span></div>
            <div>height: <span style={{color:'orange'}}>{props.height}</span></div>
            <div>mass: <span style={{color:'orange'}}>{props.mass}</span></div>
            <div>hair: <span style={{color:'orange'}}>{props.hair_color}</span></div>
            <div>skin: <span style={{color:'orange'}}>{props.skin_color}</span></div>
        </div>
        
    
    )
    
}

export default description