import React, { Component } from 'react';
import styles from './App.module.css'

import SwFlirt from './containers/SwFlirt/SwFlirt';


class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
          <SwFlirt/>
      </div>
    );
  }
}

export default App;
