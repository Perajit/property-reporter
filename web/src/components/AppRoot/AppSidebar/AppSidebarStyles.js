import { createMuiTheme } from 'material-ui/styles'

export const createNavListStyles = () => {
  return (theme) => ({
    activeMenuItem: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary
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

export const createSidebarTheme = () => {
  return createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
}
