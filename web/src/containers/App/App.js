import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoot from 'components/AppRoot'
import DashboardPage from 'containers/DashboardPage'
import SummaryPage from 'containers/SummaryPage'
import ListPage from 'containers/ListPage'
import FormPage from 'containers/FormPage'

import {
  DASHBOARD_PAGE_TITLE,
  SUMMARY_PAGE_TITLE,
  LIST_PAGE_TITLE
} from 'constants/labels'

const App = () => {
  return (
    <Router>
      <AppRoot
        links={
          [
            { href: "/", label: DASHBOARD_PAGE_TITLE },
            { href: "/summary", label: SUMMARY_PAGE_TITLE },
            { href: "/list", label: LIST_PAGE_TITLE }
          ]
        }
        navs={
          [
            { href: "/", component: DashboardPage },
            { href: "/summary", component: SummaryPage },
            { href: "/list", component: ListPage },
            { href: "/detail", component: FormPage }
          ]
        }
      />
    </Router>
  )
}

export default App
