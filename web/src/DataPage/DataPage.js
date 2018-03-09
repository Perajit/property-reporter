import React from 'react'

import PropertyListCard from '../_components/PropertyListCard'

const DataPage = (props) => {
  return (
    <div>
      <PropertyListCard
        data={ props.properties }
      />
    </div>
  )
}

export default DataPage
