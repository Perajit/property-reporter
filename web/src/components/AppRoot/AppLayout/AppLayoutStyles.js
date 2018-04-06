import bluegrey from 'material-ui/colors/bluegrey'

export const createLayoutStyles = () => {
  const smHeaderHeight = 65
  const xsHeaderHeight = 56

  return (theme) => {
    return {
      root: {
        boxSizing: 'border-box',
        height: '100%',
        backgroundColor: theme.palette.background.light
      },
      body: {
        boxSizing: 'border-box',
        height: '100%',
        [theme.breakpoints.only('sm')]: {
          height: `calc(100% - ${smHeaderHeight}px)`,
          marginTop: smHeaderHeight
        },
        [theme.breakpoints.only('xs')]: {
          height: `calc(100% - ${xsHeaderHeight}px)`,
          marginTop: xsHeaderHeight
        }
      },
      main: {
        flex: 1,
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`
      },
      sidebar: {
        flex: '0 0 250px',
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.background.dark,
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    }
  }
}
