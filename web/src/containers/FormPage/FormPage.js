import React from 'react'
import PropTypes from 'prop-types'
import {
  withRouter,
  history,
  location
} from 'react-router-dom'
import PaperSheet from 'components/PaperSheet'
import PropertyForm from 'components/PropertyForm'

import {
  PROPERTY_ADD_TITLE,
  PROPERTY_EDIT_TITLE
} from 'constants/labels'

const FormPage = (props) => {
  let {
    location,
    property,
    onSubmitForm,
    onCloseForm
  } = props

  let title = property ? PROPERTY_EDIT_TITLE : PROPERTY_ADD_TITLE
  
  return (
    <PaperSheet title={ title }>
      <PropertyForm
        data={ property }
        onSubmit={ onSubmitForm }
        onClose={ onCloseForm }
      />
    </PaperSheet>
  )
}

FormPage.propTypes = {
  location: PropTypes.object.isRequired,
  property: PropTypes.object,
  onSubmitForm: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired
}

export default withRouter(FormPage)
