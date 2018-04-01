import bluegrey from 'material-ui/colors/bluegrey'

export const createLayoutStyles = () => {
  return (theme) => {
    return {
      root: {
        height: '100%'
      },
      body: {
        boxSizing: 'border-box',
        height: '100%'
      },
      main: {
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
        backgroundColor: bluegrey[50]
      },
      sidebar: {
        boxSizing: 'border-box',
        overflow: 'auto',
        padding: theme.spacing.unit * 2,
        backgroundColor: bluegrey[800],
        color: bluegrey[50]
      }
    }
  }
}
