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
               <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', color:'yellow'}}>STAR-WARS FLIRT</h1>
               <ViewWindow/>
               <SwInterface/>
            </div>
        )
    }
}

export default swMain