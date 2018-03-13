import React, { Component } from 'react'
import PropertySummary from 'components/PropertySummary'

class HomePage extends Component {
  render() {
    return (
      <div>
        <PropertySummary
          title="Property Summary"
          data={ this.props.properties }
        />
      </div>
    )
  }
}

export default HomePage
