import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import { createDrawerStyles } from './AppToolbarStyles'

const AppToolbarDrawer = (props) => {
  let {
    classes,
    children,
    anchor,
    open,
    onToggleClick
  } = props

  let drawerClasses = {
    paper: classNames(classes.drawerPaper, classes[`drawerPaper_${anchor}`])
  }

  return (
    <Drawer
      variant="persistent"
      anchor={ anchor }
      open={ open }
      classes={ drawerClasses }
    >
      { children }
    </Drawer>
  )
}

AppToolbarDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func
}

export default withStyles(createDrawerStyles())(AppToolbarDrawer)
