import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Table, { TableCell } from 'material-ui/Table'
import EnhancedTableHead from './EnhancedTableHead'
import EnhancedTableBody from './EnhancedTableBody'

class EnhancedTable extends Component {
  state = {
    visibleData: [],
    selectedRows: []
  }

  getVisibleRowIds = () => {
    return this.state.visibleData.map((dataItem) => dataItem.id)
  }

  handleHeadCheckboxChange = (checked) => {
    let { selectedRows } = this.state
    let visibleRows = this.getVisibleRowIds()
    let newSelectedRows

    if (checked) {
      let selectedSet = new Set(selectedRows.concat(visibleRows))
      newSelectedRows = [...selectedSet]
    }
    else {
      newSelectedRows = selectedRows.filter((rowId) => visibleRows.indexOf(rowId) < 0)
    }

    this.setState({ selectedRows: newSelectedRows })
  }

  handleRowCheckboxChange = (rowId, checked) => {
    let { selectedRows } = this.state
    let selectedIndex = selectedRows.indexOf(rowId)
    let isRowSelected = selectedIndex > -1
    let newSelectedRows = selectedRows.slice(0)

    if (isRowSelected) {
      newSelectedRows.splice(selectedIndex, 1)
    }
    else {
      newSelectedRows.push(rowId)
    }

    this.setState({ selectedRows: newSelectedRows })
  }

  isAllVisibleRowsSelected = () => {
    let { selectedRows } = this.state
    let visibleRows = this.getVisibleRowIds()

    return visibleRows.length > 0 && visibleRows.every((rowId) => selectedRows.indexOf(rowId) > -1)
  }

  componentWillReceiveProps(nextProps) {
    // TODO: Apply pagination
    let { data, filter } = nextProps
    let visibleData = typeof filter === 'function' ? filter(data) : data

    this.setState({ visibleData })
  }

  componentWillUpdate(nextProps, nextState) {
    let currentSelectedRows = this.state.selectedRows
    let newSelectedRows = nextState.selectedRows

    if (newSelectedRows !== currentSelectedRows) {
      nextProps.onRowSelectionChange(newSelectedRows)
    }
  }

  render() {
    let {
      columnConfigs,
      selectable,
      className,
      customTableStyles,
      createTableRowStyles,
      customTableCellStyles
    } = this.props

    let {
      visibleData,
      selectedRows
    } = this.state

    let CustomTable = customTableStyles ? withStyles(customTableStyles)(Table) : Table
    let CustomTableCell = customTableCellStyles ? withStyles(customTableCellStyles)(TableCell) : TableCell

    return (
      <CustomTable className={ className }>
        <EnhancedTableHead
          columnConfigs={ columnConfigs }
          selectable={ selectable }
          selectAllChecked={ this.isAllVisibleRowsSelected() }
          onCheckboxChange={ this.handleHeadCheckboxChange }
          CustomTableCell={ CustomTableCell }
        />
        <EnhancedTableBody
          columnConfigs={ columnConfigs }
          data={ visibleData }
          selectable={ selectable }
          selectedRows={ selectedRows }
          onCheckboxChange={ this.handleRowCheckboxChange }
          CustomTableCell={ CustomTableCell }
        />
      </CustomTable>
    )
  }
}

export default EnhancedTable
