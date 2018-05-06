import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchableView from 'components/FetchableView'
import PropertySummaryTable from './PropertySummaryTable'

const PropertySummaryTableWrapper = (props) => {
  let {
    isFetching,
    ...tableProps
  } = props

  return (
    <FetchableView isFetching={ isFetching }>
      <PropertySummaryTable { ...tableProps } />
    </FetchableView>
  )
}

PropertySummaryTableWrapper.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default PropertySummaryTableWrapper
