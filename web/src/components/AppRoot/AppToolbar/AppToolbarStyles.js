const sidebarWidth = 250
const xsAppBarHeight = 56

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
      marginLeft: sidebarWidth
    },
    appBarShift_left: {
      width: `calc(100% - ${sidebarWidth}px)`
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
      width: sidebarWidth
    },
    drawerPaper_top: {
      top: xsAppBarHeight,
      bottom: 0
    }
  })
}
