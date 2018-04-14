import {
  APP_MENU_WIDTH,
  APP_BAR_HEIGHT_XS,
  APP_BAR_HEIGHT_SM
} from 'constants/configs'

export const createToolbarStyles = () => {
  return (theme) => ({
    root: {
      position: 'absolute'
    },
    rootClose: {
      [theme.breakpoints.only('xs')]: {
        height: 0
      }
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width', 'transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    appBarShift: {
      marginLeft: APP_MENU_WIDTH
    },
    appBarShift_left: {
      width: `calc(100% - ${APP_MENU_WIDTH}px)`
    },
    menuIcon: {
      marginRight: theme.spacing.unit * 2
    }
  })
}

export const createDrawerStyles = () => {
  return (theme) => ({
    drawerPaper: {
      zIndex: 100,
      backgroundColor: theme.palette.background.dark
    },
    drawerPaper_left: {
      width: APP_MENU_WIDTH
    },
    drawerPaper_top: {
      top: APP_BAR_HEIGHT_XS,
      bottom: 0
    }
  })
}
