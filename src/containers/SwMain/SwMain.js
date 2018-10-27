import React, { Component } from 'react'
import styles from './SwMain.module.css'



import ViewWindow from '../ViewWindow/ViewWindow'
import SwInterface from '../../components/UI/SwInterface/SwInterface'



class swMain extends Component {
    
    state = {
        
    }
    
    
//gets FilteringButtons from child component(passed by callback sending object argument)
    getFilteringButtons = (filteringGender, filteringHair) => {
        this.setState({filteringGender: filteringGender})
        this.setState({filteringHair: filteringHair})
    }
    


    render() {
    
        return(
            <div className={styles['SwMain']}>
               <SwInterface
                   filteringGender={this.state.filteringGender}
                   filteringHair={this.state.filteringHair}
                   />
               <ViewWindow
                   getFilteringButtons={this.getFilteringButtons}/>
            </div>
        )
    }
}

export default swMain