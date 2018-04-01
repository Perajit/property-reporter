import React from 'react'
import PropTypes from 'prop-types'
import { TableHead, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

const EnhancedTableHead = (props) => {
  let {
    columnConfigs,
    selectable,
    selectAllChecked,
    onCheckboxChange,
    CustomTableCell
  } = props

  let rows = mapColumnConfigsToRows(CustomTableCell, columnConfigs)

  return (
    <TableHead>
      {
        rows.map((cells, i) => (
          <TableRow key={ i }>
            {
              i === 0 && selectable ? (
                <CustomTableCell padding="checkbox" rowSpan={ rows.length }>
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
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  columnConfigs: PropTypes.array.isRequired,
  selectable: PropTypes.bool.isRequired,
  selectAllChecked: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func,
  CustomTableCell: PropTypes.func
}

const mapColumnConfigsToRows = (CustomTableCell, columnConfigs = []) => {
  return columnConfigs.reduce((rows, columnConfig) => {
    let {
      id,
      label,
      colSpan,
      rowSpan,
      rowIndex,
      width,
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
        width={ width }
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
