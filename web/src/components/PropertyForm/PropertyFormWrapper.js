import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchableView from 'components/FetchableView'
import PropertyForm from './PropertyForm'

const PropertyFormWrapper = (props) => {
  let {
    isSaving,
    ...formProps
  } = props

  return (
    <FetchableView isFetching={ isSaving } showFetchingOverlay={ true }>
      <PropertyForm { ...formProps } />
    </FetchableView>
  )
}

PropertyFormWrapper.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default PropertyFormWrapper
