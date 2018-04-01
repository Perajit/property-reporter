import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import withWidth from 'material-ui/utils/withWidth'
import Hidden from 'material-ui/Hidden'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import AppToolbarDrawer from './AppToolbarDrawer'
import NavList from 'components/NavList'

class AppToolbar extends Component {
  static propTypes = {
    appTitle: PropTypes.string,
    links: PropTypes.array.isRequired,
    hiddenOnly: PropTypes.array
  }

  state = {
    openDrawer: false
  }

  handleDrawerToggle = () => {
    let { openDrawer } = this.state

    this.setState({ openDrawer: !openDrawer })
  }

  render() {
    let { appTitle, links, hiddenOnly } = this.props
    let { openDrawer } = this.state

    return (
      <Hidden only={ hiddenOnly }>
        <AppBar>
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={ this.handleDrawerToggle }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>{ appTitle }</Typography>
          </Toolbar>
        </AppBar>
        <AppToolbarDrawer
          open={ openDrawer }
          onToggleClick={ this.handleDrawerToggle }
        >
          <NavList links={ links } />
        </AppToolbarDrawer>
      </Hidden>
    )
  }
}

export default AppToolbar
