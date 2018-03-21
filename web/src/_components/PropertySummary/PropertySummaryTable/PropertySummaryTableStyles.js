export const createTableCellStyles = (options) => {
  return (theme) => {
    let padding = options.compact ? `4px ${theme.spacing.unit}px` : ''
    let fontSize = options.compact ? 12 : ''
    let textAlign = 'center'
    let defaultStyle = { padding, fontSize, textAlign }

    return {
      head: defaultStyle,
      body: defaultStyle
    }
  }
}
