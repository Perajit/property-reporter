import React from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from 'components/EnhancedTable'
import { getColumnConfigs } from './PropertyListTableConfigs'

const PropertyListTable = (props) => {
  let {
    data,
    filter,
    selectable,
    onRowSelectionChange
  } = props

  return (
    <EnhancedTable
      columnConfigs={ getColumnConfigs() }
      data={ data }
      filter={ filter }
      selectable={ selectable }
      onRowSelectionChange={ onRowSelectionChange }
    />
  )
}

PropertyListTable.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.func,
  selectable: PropTypes.bool,
  onRowSelectionChange: PropTypes.func
}

export default PropertyListTable
