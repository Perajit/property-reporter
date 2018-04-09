import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Hidden from 'material-ui/Hidden'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import AppToolbarDrawer from './AppToolbarDrawer'
import { createToolbarStyles } from './AppToolbarStyles'

const AppToolbar = (props) => {
  let {
    classes,
    appTitle,
    links,
    shift,
    openDrawer,
    drawerAnchor,
    drawerContent,
    onDrawerToggle
  } = props

  let rootClassName = classNames(classes.root, {
    [classes.rootClose]: !openDrawer
  })

  let appBarlassName = classNames(classes.appBar, {
    [classes.appBarShift]: shift,
    [classes[`appBarShift_${drawerAnchor}`]]: shift
  })

  return (
    <div className={ rootClassName }>
      <Hidden mdUp>
        <AppBar className={ appBarlassName }>
          <Toolbar disableGutters={ !open }>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ onDrawerToggle }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>{ appTitle }</Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <AppToolbarDrawer
        open={ openDrawer }
        anchor={ drawerAnchor }
        onToggleClick={ onDrawerToggle }
      >
        { drawerContent }
      </AppToolbarDrawer>
    </div>
  )
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired,
  shift: PropTypes.bool.isRequired,
  openDrawer: PropTypes.bool.isRequired,
  drawerAnchor: PropTypes.string.isRequired,
  drawerContent: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
}

AppToolbar.defaultProps = {
  shift: false
}

export default withStyles(createToolbarStyles())(AppToolbar)
