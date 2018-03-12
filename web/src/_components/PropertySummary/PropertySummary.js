import React, { Component } from 'react'
import PropertySummaryChart from './PropertySummaryChart'

class PropertySummary extends Component {
  state = {
    priceChartSeries: {
      minSeries: [],
      maxSeries: [],
      avgSeries: []
    },
    ppsChartSeries: {
      minSeries: [],
      maxSeries: [],
      avgSeries: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps

    this.setState(mapDataToState(data))
  }

  render() {
    const { data } = this.props
    const { priceChartSeries, ppsChartSeries } = this.state
    const chartOptions = { width: 500 }

    return (
      <div>
        { generateChart('Price', priceChartSeries, chartOptions) }
        { generateChart('Price / Size', ppsChartSeries, chartOptions) }
      </div>
    )
  }
}

function generateChart(chartTitle, chartSeries, chartOptions) {
  return (
    <PropertySummaryChart
      title={ chartTitle }
      data={ chartSeries }
      options={ chartOptions }
    />
  )
}

function mapDataToState(data) {
  let priceChartSeries = {
    minSeries: [],
    maxSeries: [],
    avgSeries: []
  }
  let ppsChartSeries = {
    minSeries: [],
    maxSeries: [],
    avgSeries: []
  }

  Object.entries(data)
    .forEach(([ projectName, items ]) => {
      let totalItems = items.length
      let sumPrice = 0
      let sumPps = 0
      let minPrice, minPps, maxPrice, maxPps

      items.forEach((item, i) => {
        let { price, size } = item
        let pps = Math.round(price / size)

        if (i) {
          if (price < minPrice) {
            minPrice = price
          }
          if (pps < minPps) {
            minPps = pps
          }
          if (price > maxPrice) {
            maxPrice = price
          }
          if (pps > maxPps) {
            maxPps = pps
          }
        }
        else {
          minPrice = price
          minPps = pps
          maxPrice = price
          maxPps = pps
        }

        sumPrice += price
        sumPps += pps
      })

      let avgPrice = sumPrice / totalItems
      let avgPps = sumPps / totalItems

      priceChartSeries.minSeries.push({ y: projectName, x: minPrice })
      priceChartSeries.maxSeries.push({ y: projectName, x: maxPrice })
      priceChartSeries.avgSeries.push({ y: projectName, x: avgPrice })

      ppsChartSeries.minSeries.push({ y: projectName, x: minPps })
      ppsChartSeries.maxSeries.push({ y: projectName, x: maxPps })
      ppsChartSeries.avgSeries.push({ y: projectName, x: avgPps })
    })

  return { priceChartSeries, ppsChartSeries }
}

export default PropertySummary