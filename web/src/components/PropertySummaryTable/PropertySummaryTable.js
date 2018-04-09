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

  let overallRow = Object.assign({ projectName: 'Overall', highlight: true }, overall)

  return (
    <EnhancedTable
      columnConfigs={ getColumnConfigs() }
      data={ list.concat(overallRow) }
    />
  )
}

PropertySummaryTable.propTypes = {
  data: PropTypes.object.isRequired
}

export default PropertySummaryTable
