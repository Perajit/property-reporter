import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import { createAppTheme } from './AppStyles'
import HomePage from '../HomePage'
import DataPage from '../DataPage'

const App = () => {
  return (
    <MuiThemeProvider theme={ createAppTheme() }>
      <Router>
        <div>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/data" component={ DataPage } />
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
