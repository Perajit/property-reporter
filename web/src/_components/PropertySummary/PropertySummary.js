import React from 'react'
import PropertySummaryCard from './PropertySummaryCard'

const PropertySummary = (props) => {
  const { title, data } = props

  return (
    <PropertySummaryCard
      title={ title }
      data={ mapDataToCardData(data) }
    />
  )
}

function mapDataToCardData(data) {
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
  let summaryListData = []
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
        summaryListData.push(summary)
      }
      else {
        unknownProjectSummary = summary
      }

      priceChartData.minSeries.push({ y: projectName, x: minPrice })
      priceChartData.maxSeries.push({ y: projectName, x: maxPrice })
      priceChartData.avgSeries.push({ y: projectName, x: avgPrice })

      ppsChartData.minSeries.push({ y: projectName, x: minPps })
      ppsChartData.maxSeries.push({ y: projectName, x: maxPps })
      ppsChartData.avgSeries.push({ y: projectName, x: avgPps })
    })

  if (unknownProjectSummary) {
    summaryListData.push(unknownProjectSummary)
  }

  return { summaryListData, priceChartData, ppsChartData }
}

export default PropertySummary