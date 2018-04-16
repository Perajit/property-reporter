import React from 'react'
import PropTypes from 'prop-types'
import PaperSheet from 'components/PaperSheet'
import PropertyList from 'components/PropertyList'

import { PROPERTY_LIST_TITLE } from 'constants/labels'

const ListPage = (props) => {
  let {
    properties,
    propertiesProgress: {
      isFetching
    },
    onDeleteProperties
  } = props

  return (
    <PaperSheet title={ PROPERTY_LIST_TITLE }>
      <PropertyList
        data={ properties }
        isFetching={ isFetching }
        onDeleteProperties={ onDeleteProperties }
      />
    </PaperSheet>
  )
}

ListPage.propTypes = {
  properties: PropTypes.array.isRequired,
  propertiesProgress: PropTypes.object.isRequired,
  onDeleteProperties: PropTypes.func.isRequired
}

export default ListPage
