import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import PropertySummaryList from '../PropertySummaryList'
import PropertySummaryChart from '../PropertySummaryChart'

const chartOptions = { width: 500 }

const PropertySummaryCard = (props) => {
  const {
    title,
    data: {
      summaryListData,
      priceChartData,
      ppsChartData
    }
  } = props

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="title" component="h2">
            { title }
          </Typography>
          { createListSection(summaryListData) }
          { createChartSection('Price', priceChartData, chartOptions) }
          { createChartSection('Price / Size', ppsChartData, chartOptions) }
        </CardContent>
      </Card>
    </div>
  )
}

function createListSection(summaryListData) {
  return (
    <PropertySummaryList
      data={ summaryListData }
    />
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

export default PropertySummaryCard
