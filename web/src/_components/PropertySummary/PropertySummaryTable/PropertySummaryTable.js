import React from 'react'
import EnhancedTable from 'components/EnhancedTable'
import { createTableCellStyles } from './PropertySummaryTableStyles'
import { formatDecimal, formatCurrency } from 'helpers/format'

const textFormatter = (value) => value || 'N/A'
const numberFormatter = (value) => typeof value === 'number' ? formatDecimal(value, 0) : 'N/A'
const currencyFormatter = (value) => typeof value === 'number' ? formatCurrency(value, 0) : 'N/A'

const columnConfigs = {
  compact: [
    { id: 'projectName', numeric: false, label: 'Project Name', formatter: textFormatter, style: { textAlign: 'left' } },
    { id: 'totalItems', numeric: true, label: 'Total Items', formatter: numberFormatter },
    { id: 'avgPrice', numeric: true, label: 'Avg Price',formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.avg },
    { id: 'avgPps', numeric: true, label: 'Avg Price / Sqm', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.avg }
  ],
  default: [
    { id: 'projectName', numeric: false, label: 'Project Name', formatter: textFormatter, rowSpan: 2, style: { textAlign: 'left' } },
    { id: 'totalItems', numeric: true, label: 'Total Items', formatter: numberFormatter, rowSpan: 2 },
    { id: 'price', numeric: true, label: 'Price (Baht)', colSpan: 3, isHeader: true },
    { id: 'pps', numeric: true, label: 'Price / Sqm (Baht)', colSpan: 3, isHeader: true },
    { id: 'minPrice', numeric: true, label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.min, rowIndex: 1 },
    { id: 'maxPrice', numeric: true, label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.max, rowIndex: 1 },
    { id: 'avgPrice', numeric: true, label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.avg, rowIndex: 1 },
    { id: 'minPps', numeric: true, label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.min, rowIndex: 1 },
    { id: 'maxPps', numeric: true, label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.max, rowIndex: 1 },
    { id: 'avgPps', numeric: true, label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.avg, rowIndex: 1 }
  ]
}

const PropertySummaryTable = (props) => {
  let { data } = props
  let tableOptions = { compact: true }

  return (
    <EnhancedTable
      columnConfigs={ getColumnConfgs(tableOptions) }
      data={ data }
      customTableCellStyles={ createTableCellStyles(tableOptions) }
    />
  )
}

function getColumnConfgs(tableOptions) {
  return columnConfigs[tableOptions.compact ? 'compact' : 'default']
}

export default PropertySummaryTable
