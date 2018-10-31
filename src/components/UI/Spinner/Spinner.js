import React from 'react'
import styles from './Spinner.module.css'

const spinner = () => (
        <div>
           <h2> <span style={{color:'red'}}> ❤ </span> BE PATIENT <span style={{color:'red'}}> ❤ </span> </h2>
           <h2> I AM LOADING HOTTEST DATES FOR YOU...</h2>
           <h2>👾 👽 🤖 👨 👩</h2>
            <div className={styles['Loader']}></div>
        </div>
)

export default spinner;