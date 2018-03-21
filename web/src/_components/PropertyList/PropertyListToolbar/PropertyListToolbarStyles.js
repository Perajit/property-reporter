export const createToolbarStyles = () => {
  return (theme) => ({
    root: {
      paddingRight: theme.spacing.unit
    },
    stretch: {
      flex: '1',
    },
    invisible: {
      visibility: 'hidden'
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    }
  })
}
