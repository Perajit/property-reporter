import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoot from 'components/AppRoot'
import { getRoutes, getLinks } from './AppConfigs'

const App = () => {
  return (
    <Router>
      <AppRoot
        links={ getLinks() }
        routes={ getRoutes() }
      />
    </Router>
  )
}

export default App
