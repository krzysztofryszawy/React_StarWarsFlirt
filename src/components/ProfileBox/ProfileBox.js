import React from 'react'
import styles from './ProfileBox.module.css'

const profileBox = (props) => {
    
    return(
        <div className={styles['profileBox']}>
            {props.children}
        </div>
    )
    
    
    
}


export default profileBox