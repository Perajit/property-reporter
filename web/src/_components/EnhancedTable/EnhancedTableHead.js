import React from 'react'
import { TableHead, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

const EnhancedTableHead = (props) => {
  return (
    <TableHead>
      { createTableRows(props) }
    </TableHead>
  )
}

function createTableRows(props) {
  let {
    columnConfigs,
    selectable,
    selectAllChecked,
    onCheckboxChange,
    CustomTableCell
  } = props

  let rows = mapColumnConfigsToRows(CustomTableCell, columnConfigs)

  return rows.map((cells, i) => (
    <TableRow key={ i }>
      {
        i === 0 && selectable ? (
          <CustomTableCell
            style={ { padding: 0 } }
            rowSpan={ rows.length }
          >
            <Checkbox
              checked={ selectAllChecked }
              onChange={ (e, selected) => {
                onCheckboxChange(selected)
              } }
            />
          </CustomTableCell>
        ) : null
      }
      { cells }
    </TableRow>
  ))
}

function mapColumnConfigsToRows(CustomTableCell, columnConfigs = []) {
  return columnConfigs.reduce((rows, columnConfig) => {
    let {
      id,
      label,
      colSpan,
      rowSpan,
      rowIndex,
      padding,
      style
    } = columnConfig

    rowIndex = rowIndex || 0
    rows[rowIndex] = rows[rowIndex] || []
    rows[rowIndex].push((
      <CustomTableCell
        key={ id }
        colSpan={ colSpan || 1 }
        rowSpan={ rowSpan || 1 }
        padding={ padding }
        style={ style }
      >
        { label }
      </CustomTableCell>
    ))

    return rows
  }, [])
}

export default EnhancedTableHead
