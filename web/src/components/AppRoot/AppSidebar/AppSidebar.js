import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import { createSidebarTheme, createSidebarStyles } from './AppSidebarStyles'

const appIconSrc = '/assets/icon.png' // FIXME: Extract as a constant

const AppSidebar = (props) => {
  let { classes, links, location } = props
  let appName = 'Property Reporter'

  return (
    <div>
      <List>
        <ListItem>
          <Avatar alt="" src={ appIconSrc } className={ classes.icon } />
          <Typography variant="title" className={ classes.menuTitle }>{ appName }</Typography>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        {
          links.map((link, i) => {
            let { href, label } = link
            let className = classNames({ [classes.activeMenuItem]: href === location.pathname })

            return (
              <ListItem
                key={ i }
                button
                component="a"
                href={ href }
                className={ className }
              >
                <ListItemText primary={
                  <Typography>{ label }</Typography>
                } />
              </ListItem>
            )
          })
        }
      </List>
    </div>
  )
}

AppSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

export default compose(
  withRouter,
  withStyles(createSidebarStyles())
)(AppSidebar)
