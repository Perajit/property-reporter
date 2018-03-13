import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import HomePage from '../HomePage'
import DataPage from '../DataPage'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit',
    htmlFontSize: 13
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={ theme }>
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
