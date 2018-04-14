import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter, history, location } from 'react-router-dom'
import FormPage from './FormPage'

import {
  loadPropertyDetail,
  saveProperty
} from 'actions/property'

class FormPageContainer extends Component {
  static propTypes = {
    property: PropTypes.object,
    onLoadPropertyDetail: PropTypes.func.isRequired,
    onSaveProperty: PropTypes.func.isRequired
  }

  handleLoadPropertyDetail = (id) => {
    this.props.onLoadPropertyDetail(id)
  }

  handleSubmitForm = (data) => {
    this.props.onSaveProperty(data)
    this.closeForm()
  }

  handleCloseForm = () => {
    this.closeForm()
  }

  closeForm = () => {
    let { history, location } = this.props

    let currentPath = location.pathname
    let nextPath = currentPath.substr(0, currentPath.lastIndexOf('/'))

    history.push(nextPath)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.property !== nextProps.property
  }

  componentDidMount() {
    let {
      match: {
        params: { id }
      }
    } = this.props

    this.handleLoadPropertyDetail(id)
  }
  
  render() {
    let { property } = this.props

    return (
      <FormPage
        property={ property }
        onSubmitForm={ this.handleSubmitForm }
        onCloseForm={ this.handleCloseForm }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  property: state.property
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPropertyDetail: (id) => dispatch(loadPropertyDetail(id)),
  onSaveProperty: (data) => dispatch(saveProperty(data))
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
(FormPageContainer)
