import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadProperties, deleteProperties } from 'actions/property'
import ListPage from './ListPage'

class ListPageContainer extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
    onLoadProperties: PropTypes.func.isRequired,
    onDeleteProperties: PropTypes.func.isRequired
  }

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
      <ListPage
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPageContainer)
