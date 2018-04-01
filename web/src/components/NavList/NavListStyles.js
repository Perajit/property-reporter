export const createNavListStyles = () => {
  return (theme) => ({
    activeMenuItem: {
      color: theme.palette.secondary.main
    },
    activeMenuItemText: {
      color: 'inherit'
    }
  })
}
