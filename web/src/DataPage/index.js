import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProperties, deleteProperties } from 'actions/property'
import DataPage from './DataPage'

class DataPageContainer extends Component {
  handleLoadProperties = () => {
    this.props.onLoadProperties()
  }

  handleDeleteProperties = (ids) => {
    this.props.onDeleteProperties(ids)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.properties !== nextProps.properties
  }

  componentDidMount() {
    this.handleLoadProperties()
  }
  
  render() {
    return (
      <DataPage
        properties={ this.props.properties }
        onDeleteProperties={ this.handleDeleteProperties }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties
})

const mapDispatchToProps = (dispatch) => ({
  onLoadProperties: () => dispatch(loadProperties()),
  onDeleteProperties: (ids) => dispatch(deleteProperties(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataPageContainer)
