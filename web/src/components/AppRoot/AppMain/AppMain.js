import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { createMainStyles } from './AppMainStyles'

const AppMain = (props) => {
  let {
    classes,
    routes,
    shift
  } = props
  
  let rootClassName = classNames(classes.root, {
    [classes.rootShift]: shift
  })

  return (
    <div className={ rootClassName }>
      <div className={ classes.content }>
        <Switch>
          {
            routes.map((route, i) => (
              <Route
                key={ i }
                { ...route }
              />
            ))
          }
          <Redirect from="/" to={ routes[0].path } />
        </Switch>
      </div>
    </div>
  )
}

AppMain.propTypes = {
  classes: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  shift: PropTypes.bool.isRequired
}

AppMain.defaultProps = {
  shift: false
}

export default withStyles(createMainStyles())(AppMain)
