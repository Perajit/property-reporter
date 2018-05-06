import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FetchableView from 'components/FetchableView'
import PropertyListTable from './PropertyListTable'

const PropertyListTableWrapper = (props) => {
  let {
    isFetching,
    ...tableProps
  } = props
console.log('PropertyListTableWrapper', { isFetching })
  return (
    <FetchableView isFetching={ isFetching }>
      <PropertyListTable { ...tableProps } />
    </FetchableView>
  )
}

PropertyListTableWrapper.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default PropertyListTableWrapper
