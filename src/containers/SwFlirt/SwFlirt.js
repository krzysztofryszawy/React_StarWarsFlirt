import React, { Component } from 'react'
import styles from './SwFlirt.module.css'

import ViewWindow from '../ViewWindow/ViewWindow'
import SwInterface from '../../components/UI/SwInterface/SwInterface'



class swFlirt extends Component {
    
    state = {
        
    }
    
    render() {
        
    
        return(
            <div className={styles['SwFlirt']}>
                <ViewWindow/>
                <SwInterface/>
            </div>
        )
    }
}

export default swFlirt