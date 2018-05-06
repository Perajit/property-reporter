import React from 'react'
import PropTypes from 'prop-types'
import PropertyComparisonChart from 'components/PropertyComparisonChart'
import { mapListToChartSeries } from './PropertySummaryChartHelper'

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