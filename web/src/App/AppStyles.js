import { createMuiTheme } from 'material-ui/styles'

export const createAppTheme = () => {
  let defaultTableRowStyle = { height: 'auto' }
  let defaultTableCellStyle = { padding: '4px 1em', fontSize: 'inherit' }

  return createMuiTheme({
    typography: {
      fontFamily: 'Kanit',
      htmlFontSize: 13
    },
    overrides: {
      MuiTableRow: {
        root: defaultTableRowStyle,
        head: defaultTableRowStyle
      },
      MuiTableCell: {
        root: defaultTableCellStyle,
        head: defaultTableCellStyle
      }
    }
  })
}
