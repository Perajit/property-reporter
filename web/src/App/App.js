import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HomePage from '../HomePage'
import DataPage from '../DataPage'

const PROPERTIES_ENDPOINT = 'http://localhost:5000/api/properties'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/data" component={ DataPage } />
      </div>
    </Router>
  )
}

export default App
