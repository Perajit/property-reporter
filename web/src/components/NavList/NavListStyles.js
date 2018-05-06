export const createNavListStyles = () => {
  return (theme) => {
    const menuTextColor = theme.palette.text.main
    const activeMenuTextColor = theme.palette.text.primary

    return {
      activeMenuItem: {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.light
        }
      },
      menuItemIcon: {
        color: menuTextColor
      },
      activeMenuItemIcon: {
        color: activeMenuTextColor
      },
      menuItemTextPrimary: {
        color: menuTextColor
      },
      activeMenuItemTextPrimary: {
        color: activeMenuTextColor
      }
    }
  }
}
