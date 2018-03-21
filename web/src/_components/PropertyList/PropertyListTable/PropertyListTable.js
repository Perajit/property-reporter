import React, { Component } from 'react'
import moment from 'moment'
import EnhancedTable from 'components/EnhancedTable'
import { createTableCellStyles } from './PropertyListTableStyles'
import { formatDecimal } from 'helpers/format'

const textFormatter = (value) => value || 'N/A'
const numberFormatter = (value) => typeof value === 'number' ? formatDecimal(value, 0) : 'N/A'
const dateFormatter = (value) => moment(Number(value)).format('DD/MM/YYYY')
const linkFormatter = (value) => <a target="_blank" href={ value }>Link</a>

const columnConfigs = [
  { id: 'projectName', numeric: false, label: 'Project Name', formatter: textFormatter, style: { textAlign: 'left' } },
  { id: 'size', numeric: true, label: 'Size (Sqm)', formatter: numberFormatter },
  { id: 'price', numeric: true, label: 'Price (Baht)', formatter: numberFormatter, formula: (dataItem) => dataItem.price },
  { id: 'pps', numeric: true, label: 'Price / Sqm (Baht)', formatter: numberFormatter, formula: (dataItem) => dataItem.price / dataItem.size },
  { id: 'bedrooms', numeric: true, label: 'Bedrooms', formatter: numberFormatter, padding: 'none' },
  { id: 'bathrooms', numeric: true, label: 'Bathrooms', formatter: numberFormatter, padding: 'none' },
  { id: 'lastUpdatedTime', numeric: false, label: 'Last Updated', formatter: dateFormatter, padding: 'none' },
  { id: 'detailUrl', numeric: false, label: 'Detail', formatter: linkFormatter, padding: 'none' }
]

const PropertyListTable = (props) => {
  let {
    data,
    filter,
    selectable,
    onRowSelectionChange
  } = props

  return (
    <EnhancedTable
      columnConfigs={ columnConfigs }
      data={ data }
      filter={ filter }
      selectable={ selectable }
      onRowSelectionChange={ onRowSelectionChange }
      customTableCellStyles={ createTableCellStyles() }
    />
  )
}

export default PropertyListTable
