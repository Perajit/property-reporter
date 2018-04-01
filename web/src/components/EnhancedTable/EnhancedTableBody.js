import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

const EnhancedTableBody = (props) => {
  let {
    columnConfigs,
    data,
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
              { mapColumnConfigsToCells(CustomTableCell, columnConfigs, dataItem) }
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
  selectable: PropTypes.bool.isRequired,
  selectedRows: PropTypes.array,
  onCheckboxChange: PropTypes.func,
  CustomTableCell: PropTypes.func
}

const mapColumnConfigsToCells = (CustomTableCell, columnConfigs = [], dataItem = {}) => {
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
        style
      } = columnConfig

      let value = typeof formula === 'function' ? formula(dataItem) : dataItem[id]

      cells.push((
        <CustomTableCell
          key={ id }
          numeric={ numeric }
          width={ width }
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
