import React, { Component } from 'react'

class PropertySearchBar extends Component {
  handleChangeKeyword = (e) => {
    let keyword = e.target.value
    this.props.onChangeFilter({ keyword })
  }

  render() {
    return (
      <div>
        <input
          placeholder="Type keyword"
          onChange={ this.handleChangeKeyword }
        />
      </div>
    )
  }
}

export default PropertySearchBar
