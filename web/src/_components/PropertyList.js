import React from 'react'
import moment from 'moment'

const formatDecimal = (n, decimalPoint = 2) => n.toFixed(decimalPoint).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
const formatCurrency = (n) => `฿${formatDecimal(n, 2)}`

const PropertyList = (props) => {
  const { data } = props
  
  const mapDataToDom = (dataItem, key) => {
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
        {
          Object.entries(data)
            .reduce((allItems, entry, i) => allItems.concat(entry[1]), [])
            .map(mapDataToDom)
        }
      </tbody>
    </table>
  )
}

export default PropertyList
