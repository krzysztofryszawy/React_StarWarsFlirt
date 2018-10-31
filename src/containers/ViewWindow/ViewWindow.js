import React, { Component } from 'react'
import styles from './ViewWindow.module.css'
import Spinner from '../../components/UI/Spinner/Spinner'

import Profiles from '../../components/Profiles/Profiles'



class viewWindow extends Component {

    
    state = {
    }

   
    
    render() {
    
  
    //loader
    
    
        
        return(
            <div className={styles['viewWindow']}>
                {this.props.loading 
                    ? <Spinner/> 
                    : <Profiles
                        filteredLovers={this.props.filteredLovers}
                        filteredLoversLength={this.props.filteredLoversLength}
                />}
            </div>
        
        )
        
        
        
    }
    
    
    
    
    
    
}

export default viewWindow