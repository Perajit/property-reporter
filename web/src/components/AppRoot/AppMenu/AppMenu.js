import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Hidden from 'material-ui/Hidden'
import List, { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import NavList from 'components/NavList'
import { createMenuStyles } from './AppMenuStyles'

const appIconSrc = '/assets/icon.png' // FIXME: Extract as a constant

const AppMenu = (props) => {
  let {
    classes,
    appTitle,
    links,
    titleHidden
  } = props

  return (
    <div className={ classes.root }>
      <Hidden { ...titleHidden }>
        <List>
          <ListItem>
            <Avatar alt="" src={ appIconSrc } className={ classes.icon } />
            <Typography variant="title" className={ classes.menuTitle }>{ appTitle }</Typography>
          </ListItem>
        </List>
        <Divider />
      </Hidden>
      <NavList links={ links } />
    </div>
  )
}

AppMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  appTitle: PropTypes.string,
  links: PropTypes.array.isRequired,
  titleHidden: PropTypes.object.isRequired
}

export default withStyles(createMenuStyles())(AppMenu)
