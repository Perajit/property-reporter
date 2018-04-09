export const getSheetStyles = () => {
  return (theme) => ({
    root: theme.mixins.gutters({
      marginTop: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.only('xs')]: {
        marginTop: theme.spacing.unit
      }
    }),
    title: {
      fontSize: '1.3rem'
    }
  })
}
