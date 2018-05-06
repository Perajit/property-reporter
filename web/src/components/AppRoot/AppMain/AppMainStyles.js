import {
  APP_MENU_WIDTH,
  APP_BAR_HEIGHT_XS,
  APP_BAR_HEIGHT_SM
} from 'constants/configs'

export const createMainStyles = () => {
  return (theme) => ({
    root: {
      flex: 1,
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      [theme.breakpoints.only('xs')]: {
        height: `calc(100% - ${APP_BAR_HEIGHT_XS}px)`,
        marginTop: APP_BAR_HEIGHT_XS
      },
      [theme.breakpoints.only('sm')]: {
        height: `calc(100% - ${APP_BAR_HEIGHT_SM}px)`,
        marginTop: APP_BAR_HEIGHT_SM
      }
    },
    rootShift: {
      width: `calc(100% - ${APP_MENU_WIDTH}px)`,
      marginLeft: APP_MENU_WIDTH,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
    content: {
      boxSizing: 'border-box',
      overflow: 'auto',
      width: '100%',
      height: '100%',
      padding: theme.spacing.unit * 3,
      [theme.breakpoints.only('xs')]: {
        padding: theme.spacing.unit * 2
      },
    }
  })
}
