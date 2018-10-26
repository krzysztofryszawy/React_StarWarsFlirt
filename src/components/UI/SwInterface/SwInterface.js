import React from 'react'
import styles from './SwInterface.module.css'

import Button from '../Button/Button'

const swInterface = (props) => {
    
    return(
        <div className={styles['swInterface']}>
            <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', color:'yellow'}}>STAR-WARS FLIRT</h1>

        </div>
    )
}


export default swInterface;