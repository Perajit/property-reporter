import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries
} from 'react-vis'
import { formatSiPrefix } from 'helpers/format'

const PropertyComparisonChart = (props) => {
  let {
    colors,
    data,
    width,
    height,
    barHeight
  } = props

  let { barSeries } = mapDataToChartComponents(data, colors)

  return (
    <XYPlot
      yType="ordinal"
      width={ width }
      height={ height || calculateChartHeight(data, barHeight) }
      margin={ { left: 0, bottom: 24 } }
      className="property-comparision-chart"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      { barSeries }
      <XAxis tickFormat={ formatSiPrefix } />
      <YAxis />
    </XYPlot>
  )
}

PropertyComparisonChart.propTypes = {
  colors: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  barHeight: PropTypes.number
}

PropertyComparisonChart.defaultProps = {
  colors: [],
  width: 400,
  barHeight: 35
}

const mapDataToChartComponents = (data, colors) => {
  let BarSeries = HorizontalBarSeries
  let legends = []
  let barSeries = []

  Object.entries(data).forEach(([ key, list ], i) => {
    legends.push(key)
    barSeries = barSeries.concat(
      <BarSeries
        key={ key }
        data={ list }
        color={ colors[i] }
      />
    )
  })

  return { legends, barSeries }
}

const calculateChartHeight = (data, barHeight) => {
  let lists = Object.values(data)
  let totalGroups = lists[0].length 
  let barsPerGroup = lists.length

  return totalGroups * barsPerGroup * barHeight
}

export default PropertyComparisonChart