import React from 'react'
import moment from 'moment'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { formatDecimal, formatCurrency } from 'helpers/format'

const PropertyList = (props) => {
  const { data } = props

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Project Name</TableCell>
          <TableCell>Size</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Price / Size</TableCell>
          <TableCell>Bedrooms</TableCell>
          <TableCell>Bathrooms</TableCell>
          <TableCell>Last Updated</TableCell>
          <TableCell>Detail</TableCell>
        </TableRow>
      </TableHead>
      <tbody>
        { data.map(mapDataToDom) }
      </tbody>
    </Table>
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
    <TableRow
      key={ key }
    >
      <TableCell>{ projectName || 'N/A' }</TableCell>
      <TableCell>{ formatDecimal(size, 0) } sqm</TableCell>
      <TableCell>{ formatCurrency(Number(price)) }</TableCell>
      <TableCell>{ formatCurrency(Number(price / size)) }</TableCell>
      <TableCell>{ bedrooms }</TableCell>
      <TableCell>{ bathrooms }</TableCell>
      <TableCell>{ moment(Number(lastUpdatedTime)).format('DD/MM/YYYY') }</TableCell>
      <TableCell>
        <a target="_blank" href={ detailUrl }>Detail</a>
      </TableCell>
    </TableRow>
  )
}

export default PropertyList
