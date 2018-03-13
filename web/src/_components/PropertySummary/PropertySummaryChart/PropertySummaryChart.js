import React from 'react'
import Typography from 'material-ui/Typography'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries
} from 'react-vis'
import { formatSiPrefix } from 'helpers/format'

const PropertySummaryChart = (props) => {
  const BarSeries = HorizontalBarSeries
  const {
    title,
    data: {
      minSeries,
      maxSeries,
      avgSeries
    },
    options: {
      width,
      height
    }
  } = props

  return (
    <div>
      <Typography variant="subheading" component="h3">
        { title }
      </Typography>
      <XYPlot
        yType="ordinal"
        stackBy="x"
        width={ width }
        height={ height || ( 40 * minSeries.length ) }
        margin={ { left: 0 } }
        className="property-summary-chart"
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <BarSeries
          color="#B7885E"
          data={ minSeries }
        />
        <BarSeries
          color="#F89570"
          data={ avgSeries }
        />
        <BarSeries
          color="#FFCB99"
          data={ maxSeries }
        />
        <XAxis tickFormat={ formatSiPrefix } />
        <YAxis />
      </XYPlot>
    </div>
  )
}

export default PropertySummaryChart