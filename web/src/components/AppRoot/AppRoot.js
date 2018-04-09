import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import { createRootTheme } from './AppRootStyles'
import AppLayout from './AppLayout'

const appTitle = 'Property Reporter' // FIXME: Extract to constant

const AppRoot = (props) => {
  let {
    links,
    navs
  } = props

  return (
    <MuiThemeProvider theme={ createRootTheme() }>
      <AppLayout
        appTitle={ appTitle }
        { ...props }
      />
    </MuiThemeProvider>
  )
}

AppRoot.propTypes = {
  links: PropTypes.array.isRequired,
  navs: PropTypes.array.isRequired
}

export default AppRoot
