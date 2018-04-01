import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import AppSidebar from './AppSidebar'
import { createSidebarTheme } from './AppSidebarStyles'

const AppSidebarWithTheme = (props) => (
  <MuiThemeProvider theme={ createSidebarTheme() }>
    <AppSidebar { ...props } />
  </MuiThemeProvider>
)

export default AppSidebarWithTheme
