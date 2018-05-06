import React from 'react'
import PropTypes from 'prop-types'
import AssessmentIcon from 'material-ui-icons/Assessment'
import PaperSheet from 'components/PaperSheet'
import PropertySummaryTable from 'components/PropertySummaryTable'

import { PROPERTY_SUMMARY_TITLE } from 'constants/labels'

const title = 'Property Summary'

const SummaryPage = (props) => {
  let {
    propertySummary,
    propertySummaryProgress: {
      isFetching
    }
  } = props

  return (
    <PaperSheet title={ PROPERTY_SUMMARY_TITLE } TitleIcon={ AssessmentIcon }>
      <PropertySummaryTable
        data={ propertySummary }
        isFetching={ isFetching }
      />
    </PaperSheet>
  )
}

SummaryPage.propTypes = {
  propertySummary: PropTypes.object.isRequired,
  propertySummaryProgress: PropTypes.object.isRequired
}

export default SummaryPage
