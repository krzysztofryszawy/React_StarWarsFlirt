import React, { Component } from 'react';
import styles from './App.module.css'

import SwMain from './containers/SwMain/SwMain';


class App extends Component {
  render() {
    return (
      <div className={styles['App']}>
          <SwMain/>
      </div>
    );
  }
}

export default App;
