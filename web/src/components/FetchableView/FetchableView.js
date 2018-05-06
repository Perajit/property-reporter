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
    isFetching,
    showFetchingOverlay
  } = props

  let childrenContainerClassName = classNames({
    [classes.invisible]: !showFetchingOverlay && isFetching
  })
  
  let fetchingContainerClassName = classNames(classes.indicator, {
    [classes.hidden]: !isFetching,
    [classes.overlay]: showFetchingOverlay
  })

  return (
    <div className={ classes.root }>
      <div className={ childrenContainerClassName }>
        { children }
      </div>
      <div className={ fetchingContainerClassName }>
        <FetchingIndicator isFetching={ isFetching } />
      </div>
    </div>
  )
}

FetchableView.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  showFetchingOverlay: PropTypes.bool,
}

FetchableView.defaultProps = {
  isFetching: false
}

export default withStyles(createStyles())(FetchableView)
