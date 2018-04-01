import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoot from 'components/AppRoot'
import DashboardPage from 'containers/DashboardPage'
import SummaryPage from 'containers/SummaryPage'
import ListPage from 'containers/ListPage'

const App = () => {
  return (
    <Router>
      <AppRoot
        links={
          [
            { href: "/", label: "Dashboard" },
            { href: "/list", label: "Property List" },
            { href: "/summary", label: "Property Summary" }
          ]
        }
        navs={
          [
            { href: "/", component: DashboardPage },
            { href: "/list", component: ListPage },
            { href: "/summary", component: SummaryPage }
          ]
        }
      />
    </Router>
  )
}

export default App
