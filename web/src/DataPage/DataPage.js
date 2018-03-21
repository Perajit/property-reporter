import React from 'react'
import PropertyList from 'components/PropertyList'

const DataPage = (props) => {
  const { properties, onDeleteProperties } = props

  return (
    <PropertyList
      data={ mapToPropertyList(properties) }
      onDeleteProperties={ onDeleteProperties }
    />
  )
}

function mapToPropertyList(data) {
  let entries = Object.entries(data)

  return entries.reduce((allItems, [ projectName, items ]) => allItems.concat(items), [])
}

export default DataPage
