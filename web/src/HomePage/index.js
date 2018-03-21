import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPropertySummary } from 'actions/property'
import HomePage from './HomePage'

class HomePageContainer extends Component {
  onLoadPropertySummary = () => {
    this.props.onLoadPropertySummary()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.propertySummary !== nextProps.propertySummary
  }

  componentDidMount() {
    this.onLoadPropertySummary()
  }
  
  render() {
    return (
      <HomePage propertySummary={ this.props.propertySummary } />
    )
  }
}

const mapStateToProps = (state) => ({
  propertySummary: state.propertySummary
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPropertySummary: () => dispatch(loadPropertySummary())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
