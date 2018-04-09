import React from 'react'
import PropTypes from 'prop-types'
import PropertyComparisonChart from 'components/PropertyComparisonChart'

const mapListToChartSeries = (list, fieldHierarchy) => {
  return list.map((item) => (
    { y: item.projectName, x: extractValue(item, fieldHierarchy) }
  ))
}

const extractValue = (obj, fieldHierarchy) => {
  let value = obj

  fieldHierarchy.forEach((field) => {
    value = value[field]
  })

  return value
}

const PropertySummaryChart = (props) => {
  const {
    barHeight,
    data: {
      list
    },
    field,
    title,
    ...chartProps
  } = props

  return (
    <PropertyComparisonChart
      data={ { [title]: mapListToChartSeries(list, field.split('/')) } }
      { ...chartProps }
    />
  )
}

PropertySummaryChart.propTypes = {
  barHeight: PropTypes.number,
  data: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default PropertySummaryChart