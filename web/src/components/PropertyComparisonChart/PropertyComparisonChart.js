import React from 'react'
import PropTypes from 'prop-types'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis'
import { formatSiPrefix } from 'helpers/format'
import { mapDataToChartComponents, calculateChartHeight } from './PropertyComparisonChartHelper'

const PropertyComparisonChart = (props) => {
  let {
    colors,
    data,
    width,
    height,
    barHeight,
    showVertialGrid,
    showHorizontalGrid
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
      { showVertialGrid ? <VerticalGridLines /> : null }
      { showHorizontalGrid ? <HorizontalGridLines /> : null }
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
  barHeight: PropTypes.number,
  showVertialGrid: PropTypes.bool.isRequired,
  showHorizontalGrid: PropTypes.bool.isRequired
}

PropertyComparisonChart.defaultProps = {
  colors: [],
  width: 400,
  barHeight: 35,
  showVertialGrid: false,
  showHorizontalGrid: false
}

export default PropertyComparisonChart