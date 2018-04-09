import React from 'react'
import moment from 'moment'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import LinkIcon from 'material-ui-icons/Link'
import { formatDecimal } from 'helpers/format'

const textFormatter = (value) => value || 'N/A'
const numberFormatter = (value) => typeof value === 'number' ? formatDecimal(value, 0) : 'N/A'
const dateFormatter = (value) => moment(Number(value)).format('DD/MM/YYYY')
const linkFormatter = (value) => (
  <Tooltip title="Link to Detail">
    <a target="_blank" href={ value }>
      <IconButton aria-label="Link" >
        <LinkIcon />
      </IconButton>
    </a>
  </Tooltip>
)

export const getColumnConfigs = () => ([
  { id: 'projectName', label: 'Project Name', formatter: textFormatter },
  { id: 'size', label: 'Size (Sq.m)', formatter: numberFormatter, width: '80px', hidden: { smDown: true } },
  { id: 'price', label: 'Price (Baht)', formatter: numberFormatter, formula: (dataItem) => dataItem.price },
  { id: 'pps', label: 'Price / Sq m (Baht)', formatter: numberFormatter, formula: (dataItem) => dataItem.price / dataItem.size },
  { id: 'bedrooms', label: 'Bedrooms', formatter: numberFormatter, padding: 'none', width: '80px', hidden: { mdDown: true } },
  { id: 'bathrooms', label: 'Bathrooms', formatter: numberFormatter, padding: 'none', width: '80px', hidden: { mdDown: true } },
  { id: 'lastUpdatedTime', label: 'Last Updated', formatter: dateFormatter, padding: 'none', width: '120px', hidden: { smDown: true } },
  { id: 'detailUrl', formatter: linkFormatter, padding: 'none', width: '40px' }
])
