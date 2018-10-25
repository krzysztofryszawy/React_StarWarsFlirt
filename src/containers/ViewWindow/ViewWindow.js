import React, { Component } from 'react'
import styles from './ViewWindow.module.css'
import SwAxios from '../../axios-swInstance';
import Profiles from '../../components/Profiles/Profiles'


class viewWindow extends Component {

    
    state = {
        loading: false,
        lovers: [],
    }




    loadLover = () => {
        this.setState({loading:true})
        SwAxios.get('/people/')
          .then(response => {
                console.log(response.data.results)
                this.setState({lovers: response.data.results, loading: false});
                
        })
            .catch(error => {
                console.log(error)
                this.setState({networkError: true, loading: false})
        });
    }
    

    
    
    render() {
        

        
        return(
            <div className={styles['viewWindow']}>
                <button onClick={this.loadLover}>LOAD</button>
                <Profiles
                    lovers={this.state.lovers}
                    loading={this.state.loading}
                />
            </div>
        
        )
        
        
        
    }
    
    
    
    
    
    
}

export default viewWindow