import React from 'react'
import PropTypes from 'prop-types'
import PaperSheet from 'components/PaperSheet'
import PropertySummaryTable from 'components/PropertySummaryTable'

const title = 'Property Summary'

const SummaryPage = (props) => {
  let { propertySummary } = props

  return (
    <PaperSheet title={ title }>
      <PropertySummaryTable data={ propertySummary } />
    </PaperSheet>
  )
}

SummaryPage.propTypes = {
  propertySummary: PropTypes.object.isRequired
}

export default SummaryPage
