import React, { Component } from 'react'
import styles from './ViewWindow.module.css'
import SwAxios from '../../axios-swInstance';
import Profiles from '../../components/Profiles/Profiles'
import axios from 'axios'
import Filters from  '../../components/Filters/Filters'
import Button from '../../components/UI/Button/Button'



class viewWindow extends Component {

    
    state = {
        loading: false,
        lovers: [],
        filteredLovers: [],
        gender: ['female', 'male', 'n/a'],
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
        const result = this.state.lovers.filter(singleResult => this.state.gender.includes(singleResult.gender) && this.state.hair_color.includes(singleResult.hair_color) && this.state.height.includes(singleResult.height))
        this.setState({filteredLovers:result})
    }
    
    
    
    
    
    
    render() {
        
        
        
// sends data (filter buttons) to component level up by using callback => to show inside other component (Interface)
        const sendFunction = () => {
            this.props.getFilteringButtons(filteringGender, filteringHair)
        }
        
        
        
        
//changes state to set info what filters should be used // redundant variables left just for easier code understanding
    const changeState = (e) => {
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
        this.setState({[filterKey]: array},() => this.filterLovers())
    }

    
    
    
    
    
    
    
//    btnType={this.state.showInsuranceComponent ? 'Proceed' : 'Disabled'}
    let filteringGender = (
        <Filters
            description={'CHOOSE GENDER'}
            >
            {this.state.gender.some((el) => el == 'male') ? <Button btnType='Proceed' name="gender" value='male' clicked={changeState}> ✔ MALE </Button> : <Button btnType='Cancel' name="gender" value='male' clicked={changeState}> ✔ MALE </Button>}
            <Button btnType='Proceed' name="gender" value='female' clicked={changeState}> ✔ FEMALE </Button>            
            <Button btnType='Proceed' name="gender" value='n/a' clicked={changeState}> ✔ WHO CARES??? </Button>            
        </Filters>
    )
    
    let filteringHair = (
        <Filters
           description={'CHOOSE HAIR'}
           >
            <button name="hair_color" value='brown' onClick={changeState}> ✔ BROWN </button>            
            <button name="hair_color" value='blond' onClick={changeState}> ✔ BLOND </button>            
            <button name="hair_color" value='n/a' onClick={changeState}> ✔ N/A </button>            
            <button name="hair_color" value='none' onClick={changeState}> ✔ BOLD </button>            
        </Filters>
    )

        
        return(
            <div className={styles['viewWindow']}>
                <button onClick={sendFunction}>TRANSFER</button>
                <Profiles
                    filteredLovers={this.state.filteredLovers}
                    loading={this.state.loading}
                />
            </div>
        
        )
        
        
        
    }
    
    
    
    
    
    
}

export default viewWindow