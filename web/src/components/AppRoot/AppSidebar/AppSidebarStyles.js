import { createMuiTheme } from 'material-ui/styles'

export const createSidebarTheme = () => {
  return createMuiTheme({
    palette: {
      type: 'dark'
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
    }
  })
}
