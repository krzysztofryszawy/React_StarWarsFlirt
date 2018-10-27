import React from 'react'
import styles from './SwInterface.module.css'



const swInterface = (props) => {
    
    return(
            <div className={styles['swInterface']}>
                    <p style={{color:'yellow'}}>STAR-WARS FLIRT <span style={{color:'red'}}> ❤ </span> 👾 👩 👽 👨 🤖 </p>
               <div className={styles['filters']}>
                    {props.filteringGender}
                    {props.filteringHair}
               </div>
            </div>
    )
}


export default swInterface;