import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PropertyListTable from './PropertyListTable'
import PropertyListToolbar from './PropertyListToolbar'

class PropertyList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    onDeleteProperties: PropTypes.func
  }

  state = {
    filterKeyword: '',
    selectedRows: []
  }

  handleKeywordChange = (filterKeyword) => {
    this.setState({ filterKeyword })
  }

  handleDeleteSelectedRows = () => {
    let { onDeleteProperties } = this.props
    let { selectedRows } = this.state

    onDeleteProperties(mapSelectedRowsToIds(selectedRows))
  }

  handleRowSelectionChange = (selectedRows) => {
    this.setState({ selectedRows })
  }

  render() {
    let { data } = this.props
    
    let {
      filterKeyword,
      selectedRows
    } = this.state

    return (
      <div>
        <PropertyListToolbar
          selectedRows={ selectedRows }
          onKeywordChange={ this.handleKeywordChange }
          onDeleteSelectedRows={ this.handleDeleteSelectedRows }
        />
        <PropertyListTable
          data={ data }
          filter={ createFilter(filterKeyword) }
          hover={ true }
          selectable={ true }
          onRowSelectionChange={ this.handleRowSelectionChange }
        />
      </div>
    )
  }
}

const mapSelectedRowsToIds = (selectedRows) => {
  return selectedRows
}

const createFilter = (filterKeyword) => {
  if (!filterKeyword) {
    return null
  }

  let projectNamePattern = new RegExp(`^${filterKeyword}`, 'i')
  return (list) => list.filter((item) => item.projectName.match(projectNamePattern))
}

export default PropertyList
