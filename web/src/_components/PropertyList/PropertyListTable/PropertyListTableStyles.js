export const createTableCellStyles = () => {
  return (theme) => {
    let padding = `4px ${theme.spacing.unit}px`
    let textAlign = 'center'
    let fontSize = 'inherit'
    let defaultStyle = { padding, fontSize, textAlign }

    return {
      head: defaultStyle,
      body: defaultStyle
    }
  }
}
