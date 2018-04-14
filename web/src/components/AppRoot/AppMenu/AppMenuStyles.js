import { createMuiTheme } from 'material-ui/styles'
import bluegrey from 'material-ui/colors/bluegrey'

export const createMenuStyles = () => {
  return (theme) => ({
    icon: {
      marginRight: theme.spacing.unit * 2
    },
    menuTitle: {
      textTransform: 'uppercase'
    }
  })
}

export const createMenuTheme = () => {
  return createMuiTheme({
    palette: {
      type: 'dark',
      background: {
        main: bluegrey[700],
        light: bluegrey[100],
        dark: bluegrey[800]
      },
      text: {
        main: bluegrey[300],
        primary: bluegrey[50]
      }
    }
  })
}
