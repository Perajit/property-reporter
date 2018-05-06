import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import AppMenu from './AppMenu'
import { createMenuTheme } from './AppMenuStyles'

const AppMenuWithTheme = (props) => {
  let { theme, ...appMenuProps } = props

  return (
    <MuiThemeProvider theme={ createMenuTheme() }>
      <AppMenu { ...appMenuProps } />
    </MuiThemeProvider>
  )
}

export default AppMenuWithTheme
