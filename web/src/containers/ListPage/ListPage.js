import React from 'react'
import PropTypes from 'prop-types'
import PaperSheet from 'components/PaperSheet'
import PropertyList from 'components/PropertyList'

const title = 'Property List'

const ListPage = (props) => {
  let { properties, onDeleteProperties } = props

  return (
    <PaperSheet title={ title }>
      <PropertyList
        data={ properties }
        onDeleteProperties={ onDeleteProperties }
      />
    </PaperSheet>
  )
}

ListPage.propTypes = {
  properties: PropTypes.array.isRequired,
  onDeleteProperties: PropTypes.func.isRequired
}

export default ListPage
