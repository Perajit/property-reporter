import React, { Component } from 'react'
import PropertySearchBar from 'components/PropertySearchBar'
import PropertyList from 'components/PropertyList'

class DataPage extends Component {
  state = {
    filter: {},
  }

  handleChangeFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    return (
      <div>
        <PropertySearchBar
          onChangeFilter={ this.handleChangeFilter }
        />
        <PropertyList
          data={ filterData(this.props.properties, this.state.filter) }
        />
      </div>
    )
  }
}

function filterData(data, filter) {
  let entries = Object.entries(data)
  let filterKeyword = filter.keyword

  if (filterKeyword) {
    let pattern = new RegExp(`^${filterKeyword}`, 'i')
    entries = entries.filter(([ projectName, items ]) => projectName.match(pattern))
  }

  return entries.reduce((allItems, [ projectName, items ]) => allItems.concat(items), [])
}

export default DataPage
