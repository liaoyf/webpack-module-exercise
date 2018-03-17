import React, { Component } from 'react'
import styles from './css/main.css'
class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <h1 className={styles['App-title']}>{this.props.title || 'Welcome'}</h1>
        </header>
      </div>
    )
  }
}

export default App
