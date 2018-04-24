export const getSheetStyles = () => {
  return (theme) => ({
    root: theme.mixins.gutters({
      marginTop: theme.spacing.unit,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.only('xs')]: {
        marginTop: theme.spacing.unit
      }
    }),
    title: {
      fontSize: '1.3rem',
      display: 'flex',
      alignItems: 'center' 
    },
    titleIcon: {
      marginRight: theme.spacing.unit * 2
    }
  })
}
