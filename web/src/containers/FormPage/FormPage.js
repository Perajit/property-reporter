import React from 'react'
import PropTypes from 'prop-types'
import PaperSheet from 'components/PaperSheet'
import PropertyForm from 'components/PropertyForm'

const title = 'Add Property'

const FormPage = (props) => {
  let { onSubmitForm } = props
  
  return (
    <PaperSheet title={ title }>
      <PropertyForm onSubmit={ onSubmitForm } />
    </PaperSheet>
  )
}

FormPage.propTypes = {
  property: PropTypes.object,
  onSubmitForm: PropTypes.func.isRequired
}

export default FormPage
