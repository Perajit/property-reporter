import React, { Component } from 'react'
import { formatCurrency } from '../../../_helpers/format'

const PropertySummaryList = (props) => {
  const { data } = props

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Total Items</th>
            <th>Price (Min - Max)</th>
            <th>Price (Average)</th>
            <th>Price / Size (Min - Max)</th>
            <th>Price / Size (Average)</th>
          </tr>
        </thead>
        <tbody>
          { data.map(mapDataToDom) }
        </tbody>
      </table>
    </div>
  )
}

function mapDataToDom(dataItem, key) {
  const {
    projectName,
    totalItems,
    priceSummary,
    ppsSummary
  } = dataItem
  
  return (
    <tr
      key={ key }
    >
      <td>{ projectName || 'N/A' }</td>
      <td>{ totalItems }</td>
      <td>{ formatCurrency(priceSummary.min) } - { formatCurrency(priceSummary.max) }</td>
      <td>{ formatCurrency(priceSummary.avg) }</td>
      <td>{ formatCurrency(ppsSummary.min) } - { formatCurrency(ppsSummary.max) }</td>
      <td>{ formatCurrency(ppsSummary.avg) }</td>
    </tr>
  )
}

export default PropertySummaryList
