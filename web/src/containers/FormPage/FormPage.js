import React from 'react'
import PropTypes from 'prop-types'
import PaperSheet from 'components/PaperSheet'
import PropertyForm from 'components/PropertyForm'

import {
  PROPERTY_ADD_TITLE,
  PROPERTY_EDIT_TITLE
} from 'constants/labels'

const FormPage = (props) => {
  let {
    property,
    propertyProgress: {
      isSaving
    },
    onSubmitForm,
    onCloseForm
  } = props

  let title = property ? PROPERTY_EDIT_TITLE : PROPERTY_ADD_TITLE
  
  return (
    <PaperSheet title={ title }>
      <PropertyForm
        data={ property }
        isSaving={ isSaving }
        onSubmit={ onSubmitForm }
        onClose={ onCloseForm }
      />
    </PaperSheet>
  )
}

FormPage.propTypes = {
  property: PropTypes.object,
  propertyProgress: PropTypes.object,
  onSubmitForm: PropTypes.func.isRequired,
  onCloseForm: PropTypes.func.isRequired
}

export default FormPage
