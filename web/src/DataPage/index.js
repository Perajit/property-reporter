import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  loadProperties
} from '../_actions/property'
import DataPage from './DataPage'

class DataPageContainer extends Component {
  onLoadProperties = () => {
    this.props.onLoadProperties()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.properties !== nextProps.properties
  }

  componentDidMount() {
    this.onLoadProperties()
  }
  
  render() {
    return (
      <DataPage
        properties={ this.props.properties }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties
})

const mapDispatchToProps = (dispatch) => ({
  onLoadProperties: () => dispatch(loadProperties())
})

export default connect(mapStateToProps, mapDispatchToProps)(DataPageContainer)
