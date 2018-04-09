export const createNavListStyles = () => {
  return (theme) => ({
    menuItem: {
      color: theme.palette.text.primary
    },
    activeMenuItem: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary
    },
    menuItemText: {
      color: 'inherit'
    }
  })
}
