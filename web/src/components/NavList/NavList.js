import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { createNavListStyles } from './NavListStyles'

const NavList = (props) => {
  let { classes, links, location } = props

  return (
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
              <Typography className={ classes.activeMenuItemText }>{ label }</Typography>
            </ListItem>
          )
        })
      }
    </List>
  )
}

NavList.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
}

export default compose(
  withRouter,
  withStyles(createNavListStyles())
)(NavList)
