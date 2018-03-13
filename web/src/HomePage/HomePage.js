import React, { Component } from 'react'
import PropertySummary from 'components/PropertySummary'

const HomePage = (props) => {
  const title = "Property Summary"
  const detailLink = "/data"
  const { properties } = props

  return (
    <div>
      <PropertySummary
        title={ title }
        data={ properties }
        detailLink={ detailLink }
      />
    </div>
  )
}

export default HomePage
