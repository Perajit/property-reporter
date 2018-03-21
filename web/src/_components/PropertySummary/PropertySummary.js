import React from 'react'
import PropertySummaryTable from './PropertySummaryTable'
import PropertySummaryChart from './PropertySummaryChart'

const chartOptions = { width: 500 }

const PropertySummary = (props) => {
  const {
    data: {
      list,
      overall
    }
  } = props
  const overallRowData = Object.assign({ projectName: 'Overall', highlight: true }, overall)
  const { priceChartData, ppsChartData } = mapListToChartData(list)

  return (
    <div>
      { createListSection(list.concat(overallRowData)) }
      { createChartSection('Price', priceChartData, chartOptions) }
      { createChartSection('Price / Size', ppsChartData, chartOptions) }
    </div>
  )
}

function mapListToChartData(list) {
  let priceChartData = {
    minSeries: [],
    maxSeries: [],
    avgSeries: []
  }
  let ppsChartData = {
    minSeries: [],
    maxSeries: [],
    avgSeries: []
  }

  list.forEach((item) => {
    const {
      projectName,
      priceSummary,
      ppsSummary
    } = item

    priceChartData.minSeries.push({ y: projectName, x: priceSummary.min })
    priceChartData.maxSeries.push({ y: projectName, x: priceSummary.max })
    priceChartData.avgSeries.push({ y: projectName, x: priceSummary.avg })

    ppsChartData.minSeries.push({ y: projectName, x: ppsSummary.min })
    ppsChartData.maxSeries.push({ y: projectName, x: ppsSummary.max })
    ppsChartData.avgSeries.push({ y: projectName, x: ppsSummary.avg })
  })

  return { priceChartData, ppsChartData }
}

function createListSection(list) {
  return (
    <PropertySummaryTable data={ list } />
  )
}

function createChartSection(chartTitle, chartData, chartOptions) {
  return (
    <PropertySummaryChart
      title={ chartTitle }
      data={ chartData }
      options={ chartOptions }
    />
  )
}

export default PropertySummary