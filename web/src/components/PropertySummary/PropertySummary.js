import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchableView from 'components/FetchableView'
import PropertySummaryTable from './PropertySummaryTable'

const PropertySummary = (props) => {
  let {
    data,
    isFetching
  } = props

  return (
    <FetchableView isFetching={ isFetching }>
      <PropertySummaryTable data={ data } />
    </FetchableView>
  )
}

PropertySummary.propTypes = {
  data: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default PropertySummary
