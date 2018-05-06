import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import Hidden from 'material-ui/Hidden'
import { TableBody, TableRow } from 'material-ui/Table'

const EnhancedTableBody = (props) => {
  let {
    columnConfigs,
    data,
    hover,
    selectable,
    selectedRows,
    onCheckboxChange,
    CustomTableCell
  } = props

  return (
    <TableBody>
      {
        data.map((dataItem, i) => {
          let rowId = dataItem.id || i
          let isSelected = selectedRows.indexOf(rowId) > -1

          return (
            <TableRow
              key={ rowId }
              hover={ hover }
              selected={ isSelected }
            >
              {
                selectable ? (
                  <CustomTableCell padding="checkbox">
                    <Checkbox
                      checked={ isSelected }
                      onChange={ (e, selected) => {
                        onCheckboxChange(rowId, selected)
                      } }
                    />
                  </CustomTableCell>
                ) : null
              }
              { createCells(rowId, CustomTableCell, columnConfigs, dataItem) }
            </TableRow>
          )
        })
      }
    </TableBody>
  )
}

EnhancedTableBody.propTypes = {
  columnConfigs: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  hover: PropTypes.bool,
  selectable: PropTypes.bool.isRequired,
  selectedRows: PropTypes.array,
  onCheckboxChange: PropTypes.func,
  CustomTableCell: PropTypes.func
}

const createCells = (rowId, CustomTableCell, columnConfigs = [], dataItem = {}) => {
  return columnConfigs.reduce((cells, columnConfig) => {
    // Skip adding content if column is a group header
    if (!columnConfig.isHeader) {
      let {
        id,
        formula,
        formatter,
        numeric,
        width,
        padding,
        style,
        hidden
      } = columnConfig

      let value = typeof formula === 'function' ? formula(dataItem) : dataItem[id]

      cells.push((
        createConditionalColumnCell(id, (
          <CustomTableCell
            key={ id }
            numeric={ numeric }
            width={ width }
            padding={ padding }
            style={ style }
          >
            { typeof formatter === 'function' ? formatter(value) : value }
          </CustomTableCell>
        ), hidden)
      ))
      
    }

    return cells
  }, [])
}

const createConditionalColumnCell = (key, columnCell, hidden) => {
  if (!hidden) {
    return columnCell
  }

  return (
    <Hidden { ...hidden } key={ key }>
      { columnCell }
    </Hidden>
  )
}

export default EnhancedTableBody
