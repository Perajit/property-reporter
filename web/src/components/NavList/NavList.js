import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { createNavListStyles } from './NavListStyles'

const NavList = (props) => {
  let {
    classes,
    links,
    location
  } = props

  return (
    <List component="nav">
      {
        links.map((link, i) => {
          let { href, label } = link

          return (
            <ListItem
              key={ i }
              button
              component="a"
              href={ href }
              className={ href === location.pathname ? classes.activeMenuItem : classes.menuItem }
            >
              <Typography className={ classes.menuItemText }>{ label }</Typography>
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
