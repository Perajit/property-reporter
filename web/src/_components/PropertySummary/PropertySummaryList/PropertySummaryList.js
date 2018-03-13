import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { theme } from './PropertySummaryListStyles'
import { formatDecimal } from 'helpers/format'

const PropertySummaryList = (props) => {
  const { data } = props

  return (
    <MuiThemeProvider theme={ theme }>
      <Table className="property-summary-table">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={ 2 }>Project Name</TableCell>
            <TableCell rowSpan={ 2 }>Total Items</TableCell>
            <TableCell colSpan={ 3 }>Price (Baht)</TableCell>
            <TableCell colSpan={ 3 }>Price / Sqm (Baht)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Min</TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Average</TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Min</TableCell>
            <TableCell>Average</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          { data.map(mapDataToDom) }
        </tbody>
      </Table>
    </MuiThemeProvider>
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
      <TableCell numeric>{ totalItems }</TableCell>
      <TableCell numeric>{ formatDecimal(priceSummary.min) }</TableCell>
      <TableCell numeric>{ formatDecimal(priceSummary.max) }</TableCell>
      <TableCell numeric>{ formatDecimal(priceSummary.avg) }</TableCell>
      <TableCell numeric>{ formatDecimal(ppsSummary.min) }</TableCell>
      <TableCell numeric>{ formatDecimal(ppsSummary.max) }</TableCell>
      <TableCell numeric>{ formatDecimal(ppsSummary.avg) }</TableCell>
    </TableRow>
  )
}

export default PropertySummaryList
