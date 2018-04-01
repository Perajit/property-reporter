import { createMuiTheme } from 'material-ui/styles'
import pink from 'material-ui/colors/pink'
import teal from 'material-ui/colors/teal'

export const createRootTheme = () => {
  let tableStyle = { marginTop: 16, marginBottom: 16 }
  let tableRowStyle = { height: 'auto' }
  let tableCellStyle = { fontSize: 'inherit', padding: '8px 24px' }
  let paddingCheckboxStyle = { padding: 0 }
  let paddingDenseStyle = { padding: '4px 16px' }
  let paddingNoneStyle = { padding: 0 }

  return createMuiTheme({
    palette: {
      primary: teal
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
