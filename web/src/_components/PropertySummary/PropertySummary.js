import React, { Component } from 'react'
import PropertySummaryChart from './PropertySummaryChart'
import PropertySummaryList from './PropertySummaryList'

class PropertySummary extends Component {
  state = {
    summaryList: [],
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
    const { priceChartSeries, ppsChartSeries, summaryList } = this.state
    const chartOptions = { width: 500 }

    return (
      <div>
        { createListSection(summaryList) }
        { createChartSection('Price', priceChartSeries, chartOptions) }
        { createChartSection('Price / Size', ppsChartSeries, chartOptions) }
      </div>
    )
  }
}

function createListSection(summaryList) {
  return (
    <PropertySummaryList
      data={ summaryList }
    />
  )
}

function createChartSection(chartTitle, chartSeries, chartOptions) {
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
  let summaryList = []
  let unknownProjectSummary = null

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
      let priceSummary = { min: minPrice, max: maxPrice, avg: avgPrice }
      let ppsSummary = { min: minPps, max: maxPps, avg: avgPps }
      let summary = { projectName, totalItems, priceSummary, ppsSummary }

      if (projectName) {
        summaryList.push(summary)
      }
      else {
        unknownProjectSummary = summary
      }

      priceChartSeries.minSeries.push({ y: projectName, x: minPrice })
      priceChartSeries.maxSeries.push({ y: projectName, x: maxPrice })
      priceChartSeries.avgSeries.push({ y: projectName, x: avgPrice })

      ppsChartSeries.minSeries.push({ y: projectName, x: minPps })
      ppsChartSeries.maxSeries.push({ y: projectName, x: maxPps })
      ppsChartSeries.avgSeries.push({ y: projectName, x: avgPps })
    })

  if (unknownProjectSummary) {
    summaryList.push(unknownProjectSummary)
  }

  return { summaryList, priceChartSeries, ppsChartSeries }
}

export default PropertySummary