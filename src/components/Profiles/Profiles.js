import React, { Component } from 'react'
import styles from './Profiles.module.css'

import SingleProfile from './SingleProfile/SingleProfile'
import Avatar from '../Avatar/Avatar'
import Description from '../Description/Description'
import ProfileBox from '../ProfileBox/ProfileBox'

class profiles extends Component {
    
    
    state = {
        
    }



    render() {
    
        

        return (
        <div className={styles['profiles']}>
            
                {this.props.lovers.map(lover => (
                <SingleProfile key={lover.url}>
                    <ProfileBox>
                        <Avatar/>
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
        )}
        </div>)
        
        
        
        
        
        
        
        
        
        
        
        
       
        
        
        
    }

        

}

export default profiles