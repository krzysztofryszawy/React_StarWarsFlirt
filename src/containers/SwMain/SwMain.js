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
        minimumHeight: 0,
        maximumHeight: 300,
        gender: ['male', 'female', 'n/a'],
        hair_color: ['brown', 'blond', 'n/a', 'none', 'bold', 'black'],
        validHairColors: ['brown', 'blond', 'n/a', 'none', 'bold', 'black'],
        hairWeird: true
    }

//load data from API and duplicate as initial value of filtered object
    componentDidMount() {
        this.loadLocalDatabase()
//        this.loadDatabase()
    }    


    shouldComponentUpdate (nextProps, nextState) {
            return nextState.filteredLovers !== this.state.filteredLovers
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
//    loadDatabase = () => {
//        this.setState({loading:true})
//        SwAxios.get('/people/')
//          .then(response => {
//                this.setState({lovers: response.data.results, filteredLovers: response.data.results, loading: false}, this.filterLovers);
//                console.log(response.data.results)
//                
//        })
//            .catch(error => {
//                this.setState({networkError: true, loading: false})
//        });
//    }

    
    
//separated method to allow filters any others hair colors beside few choosen
    switchHairWeird = () => {
        this.setState({hairWeird:!this.state.hairWeird},() => this.filterLovers())
        
    }
      
    
    
    filterLovers = () => {
        const result = this.state.hairWeird 
            ? (this.state.lovers.filter(singleResult => this.state.gender.includes(singleResult.gender) && (this.state.hair_color.includes(singleResult.hair_color) || !this.state.validHairColors.includes(singleResult.hair_color)) && parseInt(singleResult.height) >= this.state.minimumHeight && parseInt(singleResult.height) <= this.state.maximumHeight )) 
            : (this.state.lovers.filter(singleResult => this.state.gender.includes(singleResult.gender) && this.state.hair_color.includes(singleResult.hair_color) && parseInt(singleResult.height) >= this.state.minimumHeight && parseInt(singleResult.height) <= this.state.maximumHeight ))
        
        this.setState({filteredLovers:result})
    }    



 //changes state to set info what filters should be used // redundant variables left just for easier code understanding
    changeStateFilters = (e) => {
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

    
    minimumHeightHandler = (e) => {
        this.setState({minimumHeight: e.target.value}, () => this.filterLovers())
    }

    maximumHeightHandler = (e) => {
        this.setState({maximumHeight: e.target.value}, () => this.filterLovers())
    }
    
    
    
    render() {
        return(
            <div className={styles['SwMain']}>
               <SwInterface>
                    <Filters description={'CHOOSE GENDER'}>
                        <Button
                            name="gender" 
                            value='male' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.gender.indexOf('male') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('male') !== -1 ? '✔' : null}
                            > MALE </Button>

                        <Button
                            name="gender" 
                            value='female' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.gender.indexOf('female') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('female') !== -1 ? '✔' : null}
                            > FEMALE </Button>

                        <Button
                            name="gender" 
                            value='n/a' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.gender.indexOf('n/a') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.gender.indexOf('n/a') !== -1 ? '✔' : null}
                            > WHO CARES??? </Button>
                    </Filters>
                    
                    <Filters description={'CHOOSE HAIR'}>
                        <Button
                            name="hair_color" 
                            value='n/a' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.hair_color.indexOf('n/a') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('n/a') !== -1 ? '✔' : null}
                            > N/A </Button>
                        <Button
                            name="hair_color" 
                            value='brown' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.hair_color.indexOf('brown') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('brown') !== -1 ? '✔' : null}
                            > BROWN </Button>
                        <Button
                            name="hair_color" 
                            value='blond' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.hair_color.indexOf('blond') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('blond') !== -1 ? '✔' : null}
                            > BLOND </Button>
                        <Button
                            name="hair_color" 
                            value='none' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.hair_color.indexOf('none') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('none') !== -1 ? '✔' : null}
                            > BOLD </Button>           
                        <Button
                            name="hair_color" 
                            value='black' 
                            clicked={this.changeStateFilters}
                            btnType={this.state.hair_color.indexOf('black') !== -1 ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hair_color.indexOf('black') !== -1 ? '✔' : null}
                            > BLACK </Button>           
                        <Button
                            name="hair_color" 
                            value='weird' 
                            clicked={this.switchHairWeird}
                            btnType={this.state.hairWeird ? 'Proceed' : 'Disabled'}
                            symbol={this.state.hairWeird ? '✔' : null}
                            > WEIRD ONE </Button>           
                    </Filters>
                   <Filters description={'CHOOSE HEIGHT'}>
                        <div>
                            <div>min </div>
                            <input 
                              id="minimumHeight" 
                              type="number" 
                              min="0" max="300" 
                              onChange={this.minimumHeightHandler}
                              step="1"
                              value={this.state.minimumHeight}
                              style={{backgroundColor: 'black', color: 'yellow', border: '2px dashed darkorange', margin: '.5em', outline: 'none', font: 'inherit'}}/>
                        </div>
                        <div>
                            <div>max </div>
                            <input 
                              id="maximumHeight" 
                              type="number" 
                              min="0" max="300" 
                              onChange={this.maximumHeightHandler}
                              step="1"
                                value={this.state.maximumHeight}
                              style={{backgroundColor: 'black', color: 'yellow', border: '2px dashed darkorange', margin: '.5em', outline: 'none', font: 'inherit'}}/>
                        </div>
                   </Filters>
                   
                    
               </SwInterface>
               
               <ViewWindow
                   filteredLovers={this.state.filteredLovers}
                   filteredLoversLength={this.state.filteredLovers.length}
                    />
            </div>
        )
    }
}

export default swMain