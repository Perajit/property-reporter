import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import amber from 'material-ui/colors/amber'
import green from 'material-ui/colors/green'
import BasicCard from 'components/BasicCard'
import PropertySummaryChart from 'components/PropertySummaryChart'

import { DASHBOARD_TITLE } from 'constants/labels'

const DashboardPage = (props) => {
  let { propertySummary } = props

  return (
    <div>
      <Typography variant="headline" component="h3" gutterBottom>
        { DASHBOARD_TITLE }
      </Typography>
      <Grid container justify="flex-start" alignItems="stretch">
        <Grid item>
          <BasicCard title="Average Price">
            <PropertySummaryChart data={ propertySummary } field="priceSummary/avg"
              title="Average Price"
              colors={ [
                amber['A200']
              ] }
            />
          </BasicCard>
        </Grid>
        <Grid item>
          <BasicCard title="Average Price / Size">
            <PropertySummaryChart data={ propertySummary } field="ppsSummary/avg"
              title="Average Price / Size"
              colors={ [
                green['A200']
              ] }
            />
          </BasicCard>
        </Grid>
      </Grid>
    </div>
  )
}

DashboardPage.propTypes = {
  propertySummary: PropTypes.object.isRequired
}

export default DashboardPage
