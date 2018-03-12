import React from 'react'
import moment from 'moment'
import { formatDecimal, formatCurrency } from 'helpers/format'

const PropertyList = (props) => {
  const { data } = props

  return (
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Size</th>
          <th>Price</th>
          <th>Price / Size</th>
          <th>Bedrooms</th>
          <th>Bathrooms</th>
          <th>Last Updated</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        { data.map(mapDataToDom) }
      </tbody>
    </table>
  )
}

function mapDataToDom(dataItem, key) {
  let {
    projectName,
    size,
    price,
    pps,
    bedrooms,
    bathrooms,
    lastUpdatedTime,
    detailUrl
  } = dataItem
  
  return (
    <tr
      key={ key }
    >
      <td>{ projectName || 'N/A' }</td>
      <td>{ formatDecimal(size, 0) } sqm</td>
      <td>{ formatCurrency(Number(price)) }</td>
      <td>{ formatCurrency(Number(price / size)) }</td>
      <td>{ bedrooms }</td>
      <td>{ bathrooms }</td>
      <td>{ moment(Number(lastUpdatedTime)).format('DD/MM/YYYY') }</td>
      <td>
        <a target="_blank" href={ detailUrl }>Detail</a>
      </td>
    </tr>
  )
}

export default PropertyList
