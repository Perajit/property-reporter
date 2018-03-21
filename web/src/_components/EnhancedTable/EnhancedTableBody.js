import React from 'react'
import { TableBody, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

const EnhancedTableBody = (props) => {
  return (
    <TableBody>
      { createTableRows(props) }
    </TableBody>
  )
}

function createTableRows(props) {
  let {
    columnConfigs,
    data,
    selectable,
    selectedRows,
    onCheckboxChange,
    CustomTableCell
  } = props

  return data.map((dataItem, i) => {
    let rowId = dataItem.id || i
    let isSelected = selectedRows.indexOf(rowId) > -1

    return (
      <TableRow
        key={ rowId }
        selected={ isSelected }
      >
        {
          selectable ? (
            <CustomTableCell style={ { padding: 0 } }>
              <Checkbox
                checked={ isSelected }
                onChange={ (e, selected) => {
                  onCheckboxChange(rowId, selected)
                } }
              />
            </CustomTableCell>
          ) : null
        }
        { mapColumnConfigsToCells(CustomTableCell, columnConfigs, dataItem) }
      </TableRow>
    )
  })
}

function mapColumnConfigsToCells(CustomTableCell, columnConfigs = [], dataItem = {}) {
  return columnConfigs.reduce((cells, columnConfig) => {
    // Skip adding content if column is a group header
    if (!columnConfig.isHeader) {
      let {
        id,
        formula,
        formatter,
        numeric,
        padding,
        style
      } = columnConfig

      let value = typeof formula === 'function' ? formula(dataItem) : dataItem[id]

      cells.push((
        <CustomTableCell
          key={ id }
          numeric={ numeric }
          padding={ padding }
          style={ style }
        >
          { typeof formatter === 'function' ? formatter(value) : value }
        </CustomTableCell>
      ))
    }

    return cells
  }, [])
}

export default EnhancedTableBody
