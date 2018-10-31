import React from 'react'
import styles from './SingleProfile.module.css'

const singleProfile = (props) => {


    
    return(
            <div className={styles['singleProfile']}>
                {props.children}
            </div>
    )
    
    
    
}


export default singleProfile