import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import NavList from 'components/NavList'
import { createSidebarTheme, createSidebarStyles } from './AppSidebarStyles'

const appIconSrc = '/assets/icon.png' // FIXME: Extract as a constant

const StyledNavList = withStyles((theme) => ({
  activeMenuItem: {
    backgroundColor: theme.palette.secondary.main,
    color: 'inherit'
  }
}))(NavList)

const AppSidebar = (props) => {
  let { classes, appTitle, links } = props

  return (
    <div>
      <List>
        <ListItem>
          <Avatar alt="" src={ appIconSrc } className={ classes.icon } />
          <Typography variant="title" className={ classes.menuTitle }>{ appTitle }</Typography>
        </ListItem>
      </List>
      <Divider />
      <StyledNavList links={ links } />
    </div>
  )
}

AppSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired
}

export default withStyles(createSidebarStyles())(AppSidebar)
