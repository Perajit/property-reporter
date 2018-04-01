import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    width: PropTypes.string.isRequired,
    appTitle: PropTypes.string,
    links: PropTypes.array.isRequired
  }

  state = {
    openDrawer: false
  }

  handleDrawerToggle = () => {
    let { openDrawer } = this.state

    this.setState({ openDrawer: !openDrawer })
  }

  componentWillReceiveProps(nextProps) {
    let { width } = nextProps

    if (width = 'lg' || width == 'xl') {
      this.setState({ openDrawer: false })
    }
  }

  render() {
    let { appTitle, links } = this.props
    let { openDrawer } = this.state

    return (
      <Hidden mdUp>
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

export default withWidth()(AppToolbar)
