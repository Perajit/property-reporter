import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListPage from './ListPage'

import {
  loadProperties,
  deleteProperties
} from 'actions/property'

class ListPageContainer extends Component {
  static propTypes = {
    properties: PropTypes.array.isRequired,
    propertiesProgress: PropTypes.object.isRequired,
    onLoadProperties: PropTypes.func.isRequired,
    onDeleteProperties: PropTypes.func.isRequired
  }

  handleLoadProperties = () => {
    this.props.onLoadProperties()
  }

  handleDeleteProperties = (ids) => {
    this.props.onDeleteProperties(ids)
  }

  componentDidMount() {
    this.handleLoadProperties()
  }
  
  render() {
    let {
      properties,
      propertiesProgress
    } = this.props

    return (
      <ListPage
        properties={ properties }
        propertiesProgress={ propertiesProgress }
        onDeleteProperties={ this.handleDeleteProperties }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  properties: state.properties,
  propertiesProgress: state.propertiesProgress
})

const mapDispatchToProps = (dispatch) => ({
  onLoadProperties: () => dispatch(loadProperties()),
  onDeleteProperties: (ids) => dispatch(deleteProperties(ids))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPageContainer)
