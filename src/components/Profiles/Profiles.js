import React, { Component } from 'react'
import styles from './Profiles.module.css'

import SingleProfile from './SingleProfile/SingleProfile'
import Avatar from '../Avatar/Avatar'
import Description from './SingleProfile/ProfileBox/Description/Description'
import ProfileBox from './SingleProfile/ProfileBox/ProfileBox'

class profiles extends Component {
    
    
    state = {
        
    }


    componentDidMount() {

    }


    
    counter = (e) => {
        this.setState({giveHeart: e.target.value}, () => console.log(this.state.giveHeart))
        
    }


    render() {
        
        

            

            return (
                
            <div className={styles['profiles']}>
                   {this.props.filteredLoversLength !== 0 
                        ? <h2 style={{backgroundColor: 'black', color: 'orangered'}}>{this.props.filteredLoversLength} GALACTIC LOVERS WAITING FOR YOU !!!</h2>
                        : <h1> NOTHING TO SHOW... <br/> 💔 <br/>  TWEAK YOUR FILTER SETTINGS <br/>  👾</h1> }

                    {this.props.filteredLovers.map(lover => {
                        let localIcon
                        if (lover.gender === 'male') localIcon = '👨'
                            else if (lover.gender === 'female') localIcon='👩'
                                    else localIcon='🤖'
                            
                         
                            return(
                            <SingleProfile key={lover.url}>
                                <ProfileBox
                                    id={lover.url}
                                    giveHeart={this.counter}>
                                    <Avatar
                                          icon={localIcon}/>
                                    <Description
                                        name={lover.name}
                                        gender={lover.gender}
                                        hair_color={lover.hair_color}
                                        height={lover.height}
                                        mass={lover.mass}
                                        skin_color={lover.skin_color}
                                        homeworld={lover.homeworld}
                                        species={lover.species}
                                    />
                                </ProfileBox>
                            </SingleProfile>
                            )
                    }
            )}
            </div>)
        

        
        
        
        
        
        
        
        
        
        
       
        
        
        
    }

        

}

export default profiles