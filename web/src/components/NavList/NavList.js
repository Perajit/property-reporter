import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { createNavListStyles } from './NavListStyles'

const NavList = (props) => {
  let {
    location,
    classes,
    links
  } = props

  let currentPath = location.pathname
  let rootPath = `/${currentPath.split('/')[1]}`

  return (
    <List component="nav">
      {
        links.map((link, i) => {
          let {
            href,
            label,
            ItemIcon
          } = link
          
          let isActive = href === rootPath
          let itemClassName
          let itemIconClassName
          let itemTextPrimaryClassName

          if (isActive) {
            itemClassName = classes.activeMenuItem
            itemIconClassName = classes.activeMenuItemIcon
            itemTextPrimaryClassName = classes.activeMenuItemTextPrimary
          }
          else {
            itemIconClassName = classes.menuItemIcon
            itemTextPrimaryClassName = classes.menuItemTextPrimary
          }

          return (
            <ListItem
              key={ i }
              button
              component="a"
              href={ href }
              className={ itemClassName }
            >
              <ListItemIcon>
                <ItemIcon className={ itemIconClassName } />
              </ListItemIcon>
              <ListItemText inset
                primary={
                  <Typography className={ itemTextPrimaryClassName }>{ label }</Typography>
                }
              />
            </ListItem>
          )
        })
      }
    </List>
  )
}

NavList.propTypes = {
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired
}

export default compose(
  withRouter,
  withStyles(createNavListStyles())
)(NavList)
