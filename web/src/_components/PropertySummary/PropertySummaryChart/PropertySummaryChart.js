import React, { Component } from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries
} from 'react-vis'
import { formatSiPrefix } from 'helpers/format'

class PropertySummaryChart extends Component {
  render() {
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
    } = this.props

    return (
      <div>
        <h3>{ title }</h3>
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
}

export default PropertySummaryChart