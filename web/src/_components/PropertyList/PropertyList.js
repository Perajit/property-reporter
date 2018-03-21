import React, { Component } from 'react'
import moment from 'moment'
import PropertyListTable from './PropertyListTable'
import PropertyListToolbar from './PropertyListToolbar'
import SearchInput from 'components/SearchInput'
import { formatDecimal } from 'helpers/format'

class PropertyList extends Component {
  state = {
    filterKeyword: '',
    selectedRows: []
  }

  handleKeywordChange = (filterKeyword) => {
    this.setState({ filterKeyword })
  }

  handleRowSelectionChange = (selectedRows) => {
    this.setState({ selectedRows })
  }

  handleDeleteSelectedRows = () => {
    const { onDeleteProperties } = this.props
    const { selectedRows } = this.state

    onDeleteProperties(mapSelectedRowsToIds(selectedRows))
  }

  render() {
    const { data } = this.props
    const { filterKeyword, selectedRows } = this.state

    return (
      <div>
        <PropertyListToolbar
          selectedRows={ selectedRows }
          onKeywordChange={ this.handleKeywordChange }
          onDeleteSelectedRows={ this.handleDeleteSelectedRows }
        />
        <PropertyListTable
          data={ mapDataToList(data) }
          filter={ createFilter(filterKeyword) }
          selectable={ true }
          onRowSelectionChange={ this.handleRowSelectionChange }
        />
      </div>
    )
  }
}

function mapDataToList(data) {
  let entries = Object.entries(data)

  return entries.reduce((allItems, [ projectName, items ]) => allItems.concat(items), [])
}

function mapSelectedRowsToIds(selectedRows) {
  return selectedRows
}

function createFilter(filterKeyword) {
  if (!filterKeyword) {
    return null
  }

  let projectNamePattern = new RegExp(`^${filterKeyword}`, 'i')
  return (list) => list.filter((item) => item.projectName.match(projectNamePattern))
}

export default PropertyList
