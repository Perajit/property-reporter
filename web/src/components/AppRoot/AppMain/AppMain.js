import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const style = (theme) => ({
  root: {
    height: '100%'
  }
})

const AppMain = (props) => {
  let { navs, classes } = props
  let title = 'Property Reporter'

  return (
    <div className={ classes.root }>
      {
        navs.map((nav, i) => (
          <Route exact path={ nav.href } component={ nav.component } key={ i } />
        ))
      }
    </div>
  )
}

AppMain.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired
}

export default withStyles(style)(AppMain)
