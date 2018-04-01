import bluegrey from 'material-ui/colors/bluegrey'

export const createLayoutStyles = () => {
  return (theme) => {
    return {
      root: {
        boxSizing: 'border-box',
        height: '100%'
      },
      body: {
        boxSizing: 'border-box',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
          height: 'calc(100% - 65px)',
          marginTop: 65
        }
      },
      main: {
        flex: 1,
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        backgroundColor: bluegrey[50]
      },
      sidebar: {
        flex: '0 0 250px',
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: theme.spacing.unit * 2,
        backgroundColor: bluegrey[800],
        color: bluegrey[50],
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    }
  }
}
