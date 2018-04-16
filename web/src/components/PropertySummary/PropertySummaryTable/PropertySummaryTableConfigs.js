import { formatDecimal, formatCurrency } from 'helpers/format'

const textFormatter = (value) => value || 'N/A'
const numberFormatter = (value) => typeof value === 'number' ? formatDecimal(value, 0) : 'N/A'
const currencyFormatter = (value) => typeof value === 'number' ? formatCurrency(value, 0) : 'N/A'

export const getColumnConfigs = () => ([
  { id: 'projectName', label: 'Project Name', formatter: textFormatter, rowSpan: 2, style: { textAlign: 'left' } },
  { id: 'totalItems', label: 'Total Items', formatter: numberFormatter, rowSpan: 2, hidden: { xsDown: true } },
  { id: 'price', label: 'Price (Baht)', colSpan: 3, isHeader: true, hidden: { mdDown: true } },
  { id: 'pps', label: 'Price / Sqm (Baht)', colSpan: 3, isHeader: true, hidden: { mdDown: true } },
  { id: 'minPrice', label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.min, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'maxPrice', label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.max, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'avgPrice', label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.avg, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'minPps', label: 'Min', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.min, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'maxPps', label: 'Max', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.max, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'avgPps', label: 'Average', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.avg, rowIndex: 1, hidden: { mdDown: true } },
  { id: 'collapsedPrice', label: 'Average Price', formatter: numberFormatter, formula: (dataItem) => dataItem.priceSummary.avg, rowIndex: 1, hidden: { lgUp: true } },
  { id: 'collapsedPps', label: 'Average Price / Size', formatter: numberFormatter, formula: (dataItem) => dataItem.ppsSummary.avg, rowIndex: 1, hidden: { lgUp: true } }
])
