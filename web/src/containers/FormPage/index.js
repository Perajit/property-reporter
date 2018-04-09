import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveProperty } from 'actions/property'
import FormPage from './FormPage'

class FormPageContainer extends Component {
  static propTypes = {
    property: PropTypes.object,
    onSaveProperty: PropTypes.func.isRequired
  }
  
  handleSubmitForm = (data) => {
    this.props.onSaveProperty(data)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.property !== nextProps.property
  }

  componentDidMount() {
    this.handleSubmitForm()
  }
  
  render() {
    return (
      <FormPage onSubmitForm={ this.handleSubmitForm } />
    )
  }
}

const mapStateToProps = (state) => ({
  property: state.property
})

const mapDispatchToProps = (dispatch) => ({
  onSaveProperty: () => dispatch(saveProperty())
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPageContainer)
