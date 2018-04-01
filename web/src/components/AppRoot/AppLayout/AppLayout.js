import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { createLayoutStyles } from './AppLayoutStyles'

const AppLayout = (props) => {
  let { classes, mainContent, sidebarContent } = props
  let title = 'Property Reporter'

  return (
    <Grid container alignItems="stretch" spacing={ 0 } className={ classes.body }>
      <Grid item xs className={ classes.sidebar }>
        { sidebarContent }
      </Grid>
      <Grid item xs={ 10 } className={ classes.main }>
        { mainContent }
      </Grid>
    </Grid>
  )
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  mainContent: PropTypes.object.isRequired,
  sidebarContent: PropTypes.object.isRequired
}

export default withStyles(createLayoutStyles())(AppLayout)
