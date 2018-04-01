import { createMuiTheme } from 'material-ui/styles'
import pink from 'material-ui/colors/pink'

export const createSidebarTheme = () => {
  return createMuiTheme({
    palette: {
      type: 'dark'
    },
    state: {
      active: pink['A400']
    }
  })
}

export const createSidebarStyles = () => {
  return (theme) => ({
    icon: {
      marginRight: theme.spacing.unit * 2
    },
    menuTitle: {
      textTransform: 'uppercase'
    },
    activeMenuItem: {
      backgroundColor: theme.state.active
    }
  })
}
