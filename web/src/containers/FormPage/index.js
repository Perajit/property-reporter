import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import {
  withRouter,
  history,
  location
} from 'react-router-dom'
import FormPage from './FormPage'

import {
  loadPropertyDetail,
  saveProperty
} from 'actions/property'

class FormPageContainer extends Component {
  static propTypes = {
    property: PropTypes.object,
    propertyProgress: PropTypes.object,
    onLoadPropertyDetail: PropTypes.func.isRequired,
    onSaveProperty: PropTypes.func.isRequired
  }

  handleLoadPropertyDetail = (id) => {
    this.props.onLoadPropertyDetail(id)
  }

  handleSubmitForm = (data) => {
    this.props.onSaveProperty(data, !!this.props.property)
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

  componentDidMount() {
    let {
      match: {
        params: { id }
      }
    } = this.props

    this.handleLoadPropertyDetail(id)
  }

  componentWillReceiveProps(nextProps) {
    let {
      propertyProgress: { isSaving }
    } = this.props

    let nextPropertyProcess = nextProps.propertyProgress
    let nextIsSaving = nextPropertyProcess.isSaving
    let nextError = nextPropertyProcess.error

    if (isSaving && !nextIsSaving && !nextError) {
      this.closeForm()
    }
  }
  
  render() {
    let {
      property,
      propertyProgress
    } = this.props

    return (
      <FormPage
        property={ property }
        propertyProgress={ propertyProgress }
        onSubmitForm={ this.handleSubmitForm }
        onCloseForm={ this.handleCloseForm }
      />
    )
  }
}

const mapStateToProps = (state) => ({
  property: state.property,
  propertyProgress: state.propertyProgress
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
