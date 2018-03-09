import React from 'react'
import moment from 'moment'

import PropertyList from './PropertyList'

const PropertyListCard = (props) => {
  return (
    <div>
      <h3>Property List</h3>
      <PropertyList
        data={ props.data }
      />
    </div>
  )
}

export default PropertyListCard
