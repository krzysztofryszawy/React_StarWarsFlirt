import React, { Component } from 'react'
import styles from './ViewWindow.module.css'

import Profiles from '../../components/Profiles/Profiles'



class viewWindow extends Component {

    
    state = {
    }

   
    
    render() {
    
  
        
        
        return(
            <div className={styles['viewWindow']}>
                
                <Profiles
                    filteredLovers={this.props.filteredLovers}
                    loading={this.state.loading}
                />
            </div>
        
        )
        
        
        
    }
    
    
    
    
    
    
}

export default viewWindow