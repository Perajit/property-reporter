import { createMuiTheme } from 'material-ui/styles'

export const createMenuStyles = () => {
  return (theme) => ({
    root: {
      padding: theme.spacing.unit * 2
    },
    icon: {
      marginRight: theme.spacing.unit * 2
    },
    menuTitle: {
      textTransform: 'uppercase'
    }
  })
}
