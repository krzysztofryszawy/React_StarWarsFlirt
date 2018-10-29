import React, { Component } from 'react'
import styles from './SwMain.module.css'
import SwAxios from '../../axios-swInstance';
import axios from 'axios'


import ViewWindow from '../ViewWindow/ViewWindow'
import SwInterface from '../../components/UI/SwInterface/SwInterface'
import Filters from  '../../components/Filters/Filters'
import Button from '../../components/UI/Button/Button'



class swMain extends Component {

    state = {
        loading: false,
        lovers: [],
        filteredLovers: [],
        gender: ['female', 'male', 'n/a'],
        hair_color: ['brown', 'blond', 'n/a', 'none'],
        height: ["150", '172', '167', '96', '202', '178']
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
        const result = this.state.lovers.filter(singleResult => this.state.gender.includes(singleResult.gender) && this.state.hair_color.includes(singleResult.hair_color) && this.state.height.includes(singleResult.height))
        this.setState({filteredLovers:result})
    }    



 //changes state to set info what filters should be used // redundant variables left just for easier code understanding
    changeState = (e) => {
        const filterKey = e.target.name
        const filterValue = e.target.value
        const array = this.state[filterKey]
        const idxFilterValue = array.indexOf(filterValue)
//if value exist should be removed        
        if (idxFilterValue !== -1 ) {
            array.splice(idxFilterValue, 1)
        } 
//if dont exist should be added            
        else {
            array.push(filterValue)
        }
        this.setState({[filterKey]: array},() => {
            this.filterLovers()

        })
    }   
    render() {
        return(
            <div className={styles['SwMain']}>
               <SwInterface>
                    <Filters description={'CHOOSE GENDER'}>
                        <Button
                            name="gender" 
                            value='male' 
                            clicked={this.changeState}
                            btnType={this.state.gender.indexOf('male') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('male') !== -1 ? '✔' : null}
                            > MALE </Button>

                        <Button
                            name="gender" 
                            value='female' 
                            clicked={this.changeState}
                            btnType={this.state.gender.indexOf('female') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('female') !== -1 ? '✔' : null}
                            > FEMALE </Button>

                        <Button
                            name="gender" 
                            value='n/a' 
                            clicked={this.changeState}
                            btnType={this.state.gender.indexOf('n/a') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('n/a') !== -1 ? '✔' : null}
                            > WHO CARES??? </Button>
                    </Filters>
                    
                    <Filters description={'CHOOSE HAIR'}>
                        <Button
                            name="hair_color" 
                            value='n/a' 
                            clicked={this.changeState}
                            btnType={this.state.hair_color.indexOf('n/a') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('n/a') !== -1 ? '✔' : null}
                            > N/A </Button>
                        <Button
                            name="hair_color" 
                            value='brown' 
                            clicked={this.changeState}
                            btnType={this.state.hair_color.indexOf('brown') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('brown') !== -1 ? '✔' : null}
                            > BROWN </Button>
                        <Button
                            name="hair_color" 
                            value='blond' 
                            clicked={this.changeState}
                            btnType={this.state.hair_color.indexOf('blond') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('blond') !== -1 ? '✔' : null}
                            > BLOND </Button>
                        <Button
                            name="hair_color" 
                            value='none' 
                            clicked={this.changeState}
                            btnType={this.state.hair_color.indexOf('none') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('none') !== -1 ? '✔' : null}
                            > BOLD </Button>           
                    </Filters>

                    
               </SwInterface>
               
               <ViewWindow
                   filteredLovers={this.state.filteredLovers}
                    />
            </div>
        )
    }
}

export default swMain