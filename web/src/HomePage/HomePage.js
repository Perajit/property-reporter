import React, { Component } from 'react'
import { PropertySummaryCard } from 'components/PropertySummary'

const HomePage = (props) => {
  const title = "Property Summary"
  const detailLink = "/data"
  const { propertySummary } = props

  return (
    <div>
      <PropertySummaryCard
        title={ title }
        data={ propertySummary }
        detailLink={ detailLink }
      />
    </div>
  )
}

export default HomePage
