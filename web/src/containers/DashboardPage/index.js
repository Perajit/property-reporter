import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPropertySummary } from 'actions/property'
import DashboardPage from './DashboardPage'

class SummaryPageContainer extends Component {
  static propTypes = {
    propertySummary: PropTypes.object.isRequired,
    onLoadPropertySummary: PropTypes.func.isRequired
  }
  
  handleLoadPropertySummary = () => {
    this.props.onLoadPropertySummary()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.propertySummary !== nextProps.propertySummary
  }

  componentDidMount() {
    this.handleLoadPropertySummary()
  }
  
  render() {
    return (
      <DashboardPage propertySummary={ this.props.propertySummary } />
    )
  }
}

const mapStateToProps = (state) => ({
  propertySummary: state.propertySummary
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPropertySummary: () => dispatch(loadPropertySummary())
})

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPageContainer)
