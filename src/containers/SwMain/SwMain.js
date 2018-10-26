import React, { Component } from 'react'
import styles from './SwMain.module.css'



import ViewWindow from '../ViewWindow/ViewWindow'
import SwInterface from '../../components/UI/SwInterface/SwInterface'



class swMain extends Component {
    
    state = {
        
    }
    
    render() {
        
    
        return(
            <div className={styles['SwMain']}>
               <SwInterface
                   filtruj={null}/>
               <ViewWindow/>
            </div>
        )
    }
}

export default swMain