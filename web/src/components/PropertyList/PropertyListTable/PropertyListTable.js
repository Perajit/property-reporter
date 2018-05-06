import React from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from 'components/EnhancedTable'
import { getColumnConfigs } from './PropertyListTableConfigs'

const PropertyListTable = (props) => {
  return (
    <EnhancedTable
      columnConfigs={ getColumnConfigs(props) }
      { ...props }
    />
  )
}

PropertyListTable.propTypes = {
  data: PropTypes.array.isRequired,
  hover: PropTypes.bool,
  selectable: PropTypes.bool,
  customTableStyles: PropTypes.object,
  customTableCellStyles: PropTypes.object,
  onRowSelectionChange: PropTypes.func
}

export default PropertyListTable
