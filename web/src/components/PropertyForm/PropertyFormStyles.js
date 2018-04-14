export const getFormStyles = () => {
  return (theme) => ({
    root: {
      margin: theme.spacing.unit
    },
    textField: {
      marginTop: 0,
      marginBottom: 0
    },
    button: {
      marginRight: theme.spacing.unit
    }
  })
}
