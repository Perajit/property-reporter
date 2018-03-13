import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { formatCurrency } from 'helpers/format'

const PropertySummaryList = (props) => {
  const { data } = props

  return (
    <div>
      <Table className="property-summary-table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Total Items</TableCell>
            <TableCell>
              <div>Price</div>
              <div>(Min - Max)</div>
            </TableCell>
            <TableCell>
              <div>Price</div>
              <div>(Average)</div>
            </TableCell>
            <TableCell>
              <div>Price / Sqm</div>
              <div>(Min - Max)</div>
            </TableCell>
            <TableCell>
              <div>Price / Sqm</div>
              <div>(Average)</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          { data.map(mapDataToDom) }
        </tbody>
      </Table>
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
    <TableRow
      key={ key }
    >
      <TableCell>{ projectName || 'N/A' }</TableCell>
      <TableCell>{ totalItems }</TableCell>
      <TableCell>{ formatCurrency(priceSummary.min) } - { formatCurrency(priceSummary.max) }</TableCell>
      <TableCell>{ formatCurrency(priceSummary.avg) }</TableCell>
      <TableCell>{ formatCurrency(ppsSummary.min) } - { formatCurrency(ppsSummary.max) }</TableCell>
      <TableCell>{ formatCurrency(ppsSummary.avg) }</TableCell>
    </TableRow>
  )
}

export default PropertySummaryList
