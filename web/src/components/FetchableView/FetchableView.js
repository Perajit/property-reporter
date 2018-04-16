import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import FetchingIndicator from 'components/FetchingIndicator'
import { createStyles } from './FetchableViewStyles'

const FetchableView = (props) => {
  let {
    classes,
    children,
    isFetching
  } = props

  return (
    <div>
      <div className={ classNames(classes.indicator, { [classes.hidden]: !isFetching }) }>
        <FetchingIndicator isFetching={ isFetching } />
      </div>
      <div className={ classNames({ [classes.hidden]: isFetching }) }>
        { children }
      </div>
    </div>
  )
}

FetchableView.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
}

FetchableView.defaultProps = {
  isFetching: false
}

export default withStyles(createStyles())(FetchableView)
