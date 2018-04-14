import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox'
import Hidden from 'material-ui/Hidden'
import { TableHead, TableRow } from 'material-ui/Table'

const EnhancedTableHead = (props) => {
  let {
    columnConfigs,
    selectable,
    selectAllChecked,
    onCheckboxChange,
    CustomTableCell
  } = props

  let rows = createRows(CustomTableCell, columnConfigs)

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

const createRows = (CustomTableCell, columnConfigs = []) => {
  return columnConfigs.reduce((rows, columnConfig) => {
    let {
      id,
      label,
      colSpan,
      rowSpan,
      rowIndex,
      width,
      padding,
      style,
      hidden
    } = columnConfig

    rowIndex = rowIndex || 0
    rows[rowIndex] = rows[rowIndex] || []
    rows[rowIndex].push((
      createConditionalColumnCell(id, (
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
      ), hidden)
    ))

    return rows
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

export default EnhancedTableHead
