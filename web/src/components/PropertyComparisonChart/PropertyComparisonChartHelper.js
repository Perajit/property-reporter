import React from 'react'
import { HorizontalBarSeries } from 'react-vis'

export const mapDataToChartComponents = (data, colors) => {
  let legends = []
  let barSeries = []

  Object.entries(data).forEach(([ key, list ], i) => {
    legends.push(key)
    barSeries = barSeries.concat(
      <HorizontalBarSeries
        key={ key }
        data={ list }
        color={ colors[i] }
      />
    )
  })

  return { legends, barSeries }
}

export const calculateChartHeight = (data, barHeight) => {
  let lists = Object.values(data)
  let totalGroups = lists[0].length 
  let barsPerGroup = lists.length

  return totalGroups * barsPerGroup * barHeight + 20
}
