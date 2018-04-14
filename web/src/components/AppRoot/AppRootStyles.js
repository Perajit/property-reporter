import { createMuiTheme } from 'material-ui/styles'
import bluegrey from 'material-ui/colors/bluegrey'

export const createRootTheme = () => {
  let tableStyle = { marginTop: 0, marginBottom: 0 }
  let tableRowStyle = { height: 'auto' }
  let tableCellStyle = { fontSize: 'inherit', padding: '8px 24px' }
  let paddingCheckboxStyle = { padding: 0 }
  let paddingDenseStyle = { padding: '4px 16px' }
  let paddingNoneStyle = { padding: 0 }

  return createMuiTheme({
    palette: {
      background: {
        main: bluegrey[400],
        light: bluegrey[50],
        dark: bluegrey[800]
      },
      primary: {
        main: bluegrey[900],
        light: bluegrey[700],
        dark: bluegrey[900]
      }
    },
    typography: {
      fontFamily: 'Kanit',
      fontSize: 13
    },
    overrides: {
      MuiTable: {
        root: tableStyle
      },
      MuiTableRow: {
        root: tableRowStyle,
        head: tableRowStyle
      },
      MuiTableCell: {
        root: tableCellStyle,
        head: tableCellStyle,
        paddingCheckbox: paddingCheckboxStyle,
        paddingDense: paddingDenseStyle,
        paddingNone: paddingNoneStyle
      }
    }
  })
}
