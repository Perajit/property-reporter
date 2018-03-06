import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomePage from '../HomePage'
import DataPage from '../DataPage'

const App = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/data" component={DataPage} />
      </div>
    </Router>
  </div>
)

export default App
