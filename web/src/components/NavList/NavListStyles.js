export const createNavListStyles = () => {
  return (theme) => ({
    menuItem: {
      color: theme.palette.text.primary
    },
    activeMenuItem: {
      color: theme.palette.secondary.main
    },
    menuItemText: {
      color: 'inherit'
    }
  })
}
