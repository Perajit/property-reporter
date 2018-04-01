import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import { createRootTheme } from './AppRootStyles'
import AppLayout from './AppLayout'
import AppSidebar from './AppSidebar'
import AppMain from './AppMain'

const AppRoot = (props) => {
  let { links, navs } = props

  return (
    <MuiThemeProvider theme={ createRootTheme() }>
      <AppLayout
        sidebarContent={ <AppSidebar links={ links } /> }
        mainContent={ <AppMain navs={ navs } /> }
      />
    </MuiThemeProvider>
  )
}

AppRoot.propTypes = {
  links: PropTypes.array.isRequired,
  navs: PropTypes.array.isRequired
}

export default AppRoot
