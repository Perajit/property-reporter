import { createMuiTheme } from 'material-ui/styles'

export const styles = {
  alignCenter: {
    textAlign: 'center'
  },
  tableRow: {
    height: 'auto'
  },
  tableCell: {
    padding: '4px 2em'
  },
  totalItems: {
    width: 40
  }
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Kanit'
  },
  overrides: {
    MuiTableRow: {
      root: styles.tableRow,
      head: styles.tableRow
    },
    MuiTableCell: {
      root: styles.tableCell,
      head: Object.assign({}, styles.tableCell, styles.alignCenter),
      numeric: styles.alignCenter
    }
  }
})
