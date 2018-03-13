import React from 'react'
import { Link } from 'react-router-dom'
import Card,{ CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
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
    },
    detailLink
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
        { detailLink ? createCardAction(detailLink) : null }
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

function createCardAction(detailLink) {
  return (
    <CardActions>
      <Button
        component={  Link }
        to={ detailLink }
      >
        View Detail
      </Button>
    </CardActions>
  )
}

export default PropertySummaryCard
