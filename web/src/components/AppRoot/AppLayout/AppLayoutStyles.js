import { createMuiTheme } from 'material-ui/styles'

export const createLayoutStyles = () => {
  return (theme) => {
    return {
      root: {
        boxSizing: 'border-box',
        height: '100%',
        backgroundColor: theme.palette.background.light
      }
    }
  }
}

export const createMenuTheme = () => {
  return createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
}
