import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import AppToolbar from '../AppToolbar'
import AppSidebar from '../AppSidebar'
import AppMain from '../AppMain'
import { createLayoutStyles } from './AppLayoutStyles'

const title = 'Property Reporter'

const AppLayout = (props) => {
  let { classes, width, appTitle, links, navs } = props
  let toolbarHiddenOnly = ['md', 'lg']
  let hideSidebar = toolbarHiddenOnly.indexOf(width) < 0
  let sidebarClassName = classNames(classes.sidebar, { [classes.hidden]: hideSidebar })

  return (
    <div className={ classes.root }>
      <AppToolbar appTitle={ appTitle } links={ links } hiddenOnly={ toolbarHiddenOnly } />
      <Grid container alignItems="stretch" spacing={ 0 } className={ classes.body }>
        <Grid item className={ sidebarClassName }>
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
  width: PropTypes.string.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired,
  navs: PropTypes.array.isRequired
}

export default compose(
  withStyles(createLayoutStyles()),
  withWidth()
)(AppLayout)
