import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './css/main.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

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
const AppWithStyle = withStyles(styles)(App)

const createContextProvider = context => {
  class ContextProvider extends Component {
    getChildContext () {
      return context
    }
    render () {
      return this.props.children
    }
  }
  ContextProvider.childContextTypes = {}
  Object.keys(context).forEach(key => {
    ContextProvider.childContextTypes[key] = PropTypes.any.isRequired
  })

  return ContextProvider
}
const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss())
    return () => {
      removeCss.forEach(f => f())
    }
  }
}
const ContextProvider = createContextProvider(context)
export default props => (
  <ContextProvider>
    <AppWithStyle {...props} />
  </ContextProvider>
)
