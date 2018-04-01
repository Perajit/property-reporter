import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import amber from 'material-ui/colors/amber'
import green from 'material-ui/colors/green'
import EnhancedCard from 'components/EnhancedCard'
import PropertySummaryChart from 'components/PropertySummaryChart'

const title = 'Dashboard'

const DashboardPage = (props) => {
  let { propertySummary } = props

  return (
    <div>
      <Typography variant="headline" component="h3" gutterBottom>
        { title }
      </Typography>
      <Grid container justify="flex-start" alignItems="stretch">
        <Grid item>
          <EnhancedCard title="Average Price">
            <PropertySummaryChart data={ propertySummary } field="priceSummary/avg"
              title="Average Price"
              colors={ [
                amber['A200']
              ] }
            />
          </EnhancedCard>
        </Grid>
        <Grid item>
          <EnhancedCard title="Average Price / Size">
            <PropertySummaryChart data={ propertySummary } field="ppsSummary/avg"
              title="Average Price / Size"
              colors={ [
                green['A200']
              ] }
            />
          </EnhancedCard>
        </Grid>
      </Grid>
    </div>
  )
}

DashboardPage.propTypes = {
  propertySummary: PropTypes.object.isRequired
}

export default DashboardPage
