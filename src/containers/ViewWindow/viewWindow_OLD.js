import React, { Component } from 'react'
import styles from './ViewWindow.module.css'
import SwAxios from '../../axios-swInstance';
import Profiles from '../../components/Profiles/Profiles'
import axios from 'axios'

class viewWindow extends Component {

    
    state = {
        loading: false,
        lovers: [],
        filteredLovers: [],
        gender: ['female', 'n/a', 'male'],
        hair_color: ['brown', 'blond', 'n/a', 'none'],
        height: ["150", '172', '167', '96']
    }

//load data from API and duplicate as initial value of filtered object
    componentDidMount() {
        this.loadLocalDatabase()
    }



//temporary only for tests, loading from local file
    loadLocalDatabase = () => {
        axios.get('offlineDatabase.json')
          .then(localResponse => {
                this.setState({lovers: localResponse.data.results, filteredLovers: localResponse.data.results, loading: false}, this.filterLovers);
        })
            .catch(error => {
                console.log(error)
                this.setState({networkError: true, loading: false})
        });
    }
    
    


//the right method, to use finally, to get data from SWAPI
//    loadLover = () => {
//        this.setState({loading:true})
//        SwAxios.get('/people/')
//          .then(response => {
////                console.log(response.data.results)
//                this.setState({lovers: response.data.results, loading: false});
//                
//        })
//            .catch(error => {
////                console.log(error)
//                this.setState({networkError: true, loading: false})
//        });
//    }
//    


     



    
// filters output data with settings recieved from state and saves as data to .map in Profiles component
    filterLovers = () => {
        const result = this.state.lovers.filter
            (singleResult => this.state.gender.includes(singleResult.gender) 
             && this.state.hair_color.includes(singleResult.hair_color) 
             && this.state.height.includes(singleResult.height))
        this.setState({filteredLovers:result})
    }
    
    
    
    handleInputChange(e) {
        const target = e.target;
        alert(e.target.checked)
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
    
    
    
    
    
    
    
    
    render() {
        

        
        return(
            <div className={styles['viewWindow']}>
               <div>GENDER: 
                    <form> 
                        <label>MALE:
                          <input
                            name="genderInput"
                            type="checkbox"
                            checked={'male'}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        
                        <label>FEMALE:
                          <input
                            name="genderInput"
                            type="checkbox"
                            checked={'female'}
                            onChange={this.handleInputChange}
                            />
                        </label>
                        
                        <label>WHO CARES??:
                          <input
                            name="genderInput"
                            type="checkbox"
                            checked={'n/a'}
                            onChange={this.handleInputChange}
                            />
                        </label>
                    </form>
               </div>
                <Profiles
                    filteredLovers={this.state.filteredLovers}
                    loading={this.state.loading}
                />
            </div>
        
        )
        
        
        
    }
    
    
    
    
    
    
}

export default viewWindow