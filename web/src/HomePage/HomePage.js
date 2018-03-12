import React, { Component } from 'react'
import PropertySummary from 'components/PropertySummary'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Summary</h2>
        <PropertySummary
          data={ this.props.properties }
        />
      </div>
    )
  }
}

export default HomePage
