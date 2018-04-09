import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { createMainStyles } from './AppMainStyles'

const AppMain = (props) => {
  let {
    classes,
    navs,
    shift
  } = props
  
  let rootClassName = classNames(classes.root, {
    [classes.rootShift]: shift
  })

  return (
    <div className={ rootClassName }>
      <div className={ classes.content }>
      {
        navs.map((nav, i) => (
          <Route exact path={ nav.href } component={ nav.component } key={ i } />
        ))
      }
      </div>
    </div>
  )
}

AppMain.propTypes = {
  classes: PropTypes.object.isRequired,
  navs: PropTypes.array.isRequired,
  shift: PropTypes.bool.isRequired
}

AppMain.defaultProps = {
  shift: false
}

export default withStyles(createMainStyles())(AppMain)
