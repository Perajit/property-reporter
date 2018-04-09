export const getCardStyles = () => {
  return (theme) => ({
    title: {
      borderBottom: `solid 1px ${theme.palette.divider}`,
      margingBottom: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      color: theme.palette.secondary.light
    }
  })
}
