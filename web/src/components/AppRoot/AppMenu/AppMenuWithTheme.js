import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import AppMenu from './AppMenu'

const AppMenuWithTheme = (props) => {
  let { theme, ...appMenuProps } = props

  return (
    <MuiThemeProvider theme={ theme }>
      <AppMenu { ...appMenuProps } />
    </MuiThemeProvider>
  )
}

AppMenu.propTypes = {
  theme: PropTypes.object.isRequired
}

AppMenu.defaultProps = {
  theme: {}
}

export default AppMenuWithTheme
