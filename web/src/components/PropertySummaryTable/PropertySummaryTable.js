import React from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from 'components/EnhancedTable'
import { formatDecimal, formatCurrency } from 'helpers/format'

const textFormatter = (value) => value || 'N/A'
const numberFormatter = (value) => typeof value === 'number' ? formatDecimal(value, 0) : 'N/A'
const currencyFormatter = (value) => typeof value === 'number' ? formatCurrency(value, 0) : 'N/A'

const columnConfigs = [
  { id: 'projectName', label: 'Project Name', formatter: textFormatter, rowSpan: 2, style: { textAlign: 'left' } },
  { id: 'totalItems', label: 'Total Items', formatter: numberFormatter, rowSpan: 2 },
  { id: 'price', label: 'Price (Baht)', colSpan: 3, isHeader: true },
  { id: 'pps', label: 'Price / Sqm (Baht)', colSpan: 3, isHeader: true },
  { id: 'minPrice', label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.min, rowIndex: 1 },
  { id: 'maxPrice', label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.max, rowIndex: 1 },
  { id: 'avgPrice', label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.avg, rowIndex: 1 },
  { id: 'minPps', label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.min, rowIndex: 1 },
  { id: 'maxPps', label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.max, rowIndex: 1 },
  { id: 'avgPps', label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.avg, rowIndex: 1 }
]

const PropertySummaryTable = (props) => {
  let {
    data: {
      list,
      overall
    }
  } = props

  let overallRow = Object.assign({ projectName: 'Overall', highlight: true }, overall)

  return (
    <EnhancedTable
      columnConfigs={ columnConfigs }
      data={ list.concat(overallRow) }
    />
  )
}

PropertySummaryTable.propTypes = {
  data: PropTypes.object.isRequired
}

export default PropertySummaryTable
