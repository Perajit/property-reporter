import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import AppToolbar from '../AppToolbar'
import AppSidebar from '../AppSidebar'
import AppMain from '../AppMain'
import { createLayoutStyles } from './AppLayoutStyles'

const title = 'Property Reporter'

const AppLayout = (props) => {
  let { classes, appTitle, links, navs } = props

  return (
    <div className={ classes.root }>
      <AppToolbar appTitle={ appTitle } links={ links } />
      <Grid container alignItems="stretch" spacing={ 0 } className={ classes.body }>
        <Grid item className={ classes.sidebar }>
          <AppSidebar appTitle={ appTitle } links={ links } />
        </Grid>
        <Grid item className={ classes.main }>
          <AppMain navs={ navs } />
        </Grid>
      </Grid>
    </div>
  )
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired,
  navs: PropTypes.array.isRequired
}

export default withStyles(createLayoutStyles())(AppLayout)
