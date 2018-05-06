import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DashboardPage from './DashboardPage'

import { loadPropertySummary } from 'actions/property'

class SummaryPageContainer extends Component {
  static propTypes = {
    propertySummary: PropTypes.object.isRequired,
    propertySummaryProgress: PropTypes.object.isRequired,
    onLoadPropertySummary: PropTypes.func.isRequired
  }
  
  handleLoadPropertySummary = () => {
    this.props.onLoadPropertySummary()
  }

  componentDidMount() {
    this.handleLoadPropertySummary()
  }
  
  render() {
    let {
      propertySummary,
      propertySummaryProgress
    } = this.props

    return (
      <DashboardPage
        propertySummary={ propertySummary }
        propertySummaryProgress={ propertySummaryProgress }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  propertySummary: state.propertySummary,
  propertySummaryProgress: state.propertySummaryProgress
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPropertySummary: () => dispatch(loadPropertySummary())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryPageContainer)
