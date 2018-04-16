import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PropertyListToolbar from './PropertyListToolbar'
import PropertyListTable from './PropertyListTable'

class PropertyList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
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
    let {
      data,
      isFetching
    } = this.props
    
    let {
      filterKeyword,
      selectedRows
    } = this.state

    return (
      <div>
        <PropertyListToolbar
          disableSearch={ isFetching }
          selectedRows={ selectedRows }
          onKeywordChange={ this.handleKeywordChange }
          onDeleteSelectedRows={ this.handleDeleteSelectedRows }
        />
        <PropertyListTable
          data={ data }
          isFetching={ isFetching }
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
