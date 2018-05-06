import React from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from 'components/EnhancedTable'
import { getColumnConfigs } from './PropertySummaryTableConfigs'

const PropertySummaryTable = (props) => {
  let {
    data: {
      list,
      overall
    }
  } = props

  let data = list.length ?
    list.concat(Object.assign({ projectName: 'Overall', highlight: true }, overall)) : list 

  return (
    <EnhancedTable
      columnConfigs={ getColumnConfigs() }
      data={ data }
    />
  )
}

PropertySummaryTable.propTypes = {
  data: PropTypes.object.isRequired
}

export default PropertySummaryTable
