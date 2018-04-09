const sidebarWidth = 250
const smAppBarHeight = 65
const xsAppBarHeight = 56

export const createMainStyles = () => {
  return (theme) => ({
    root: {
      flex: 1,
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      [theme.breakpoints.only('xs')]: {
        height: `calc(100% - ${xsAppBarHeight}px)`,
        marginTop: xsAppBarHeight
      },
      [theme.breakpoints.only('sm')]: {
        height: `calc(100% - ${smAppBarHeight}px)`,
        marginTop: smAppBarHeight
      }
    },
    rootShift: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
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
