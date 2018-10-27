import React from 'react';
import styles from './Filters.module.css'

const filters = (props) => {
    
    return (
    <div className={styles['filtersContainer']}>
       <p>{props.description}</p>
        {props.children}
    </div>

    
    )
    
    
}

export default filters