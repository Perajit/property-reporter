import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { compose } from 'recompose'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import AppToolbar from '../AppToolbar'
import AppMain from '../AppMain'
import AppMenu from '../AppMenu'
import { createLayoutStyles, createMenuTheme } from './AppLayoutStyles'

const title = 'Property Reporter'
const toolbarConfigs = {
  xs: { hideAppBar: false, drawerAnchor: 'top' },
  sm: { hideAppBar: false, drawerAnchor: 'left' },
  md: { hideAppBar: true, drawerAnchor: 'left' },
  lg: { hideAppBar: true, drawerAnchor: 'left' },
  xl: { hideAppBar: true, drawerAnchor: 'left' }
}

class AppLayout extends Component {
  state = {
    forceOpenDrawer: false
  }

  handleDrawerToggle = () => {
    let { forceOpenDrawer } = this.state

    this.setState({ forceOpenDrawer: !forceOpenDrawer })
  }

  render() {
    let {
      classes,
      width,
      appTitle,
      links,
      routes
    } = this.props

    let drawerTitleHiddenOnly = Object.entries(toolbarConfigs)
      .reduce((only, [width, config]) => {
        let hidden = config.drawerAnchor === 'top'
        return config.drawerAnchor === 'top' ? only.concat(width) : only
      }, [])

    let toolbarConfig = toolbarConfigs[width]
    let openDrawer = this.state.forceOpenDrawer || toolbarConfig.hideAppBar
    let shift = openDrawer && toolbarConfig.drawerAnchor !== 'top'

    let toolbarProps = Object.assign({}, toolbarConfig, {
      appTitle,
      links,
      shift,
      openDrawer,
      drawerContent: (
        <AppMenu
          appTitle={ appTitle }
          links={ links }
          titleHidden={ { only: drawerTitleHiddenOnly } }
        />
      ),
      onDrawerToggle: this.handleDrawerToggle
    })

    return (
      <div className={ classes.root }>
        <AppToolbar { ...toolbarProps } />
        <AppMain routes={ routes } shift={ shift } />
      </div>
    )
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired
}

export default compose(
  withStyles(createLayoutStyles()),
  withWidth()
)(AppLayout)
