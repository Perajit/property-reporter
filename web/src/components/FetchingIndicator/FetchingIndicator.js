import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'material-ui/transitions/Fade'
import { CircularProgress } from 'material-ui/Progress'

import { FETCHING_INDICATOR_TRANSITION_DELAY } from 'constants/configs'

const FetchingIndicator = (props) => {
  let {
    isFetching
  } = props

  let transitionDelay = isFetching ? FETCHING_INDICATOR_TRANSITION_DELAY : 0

  return (
    <Fade
      in={ isFetching }
      style={ { transitionDelay: `${transitionDelay}ms` } }
      unmountOnExit
    >
      <CircularProgress />
    </Fade>
  )
}

FetchingIndicator.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default FetchingIndicator
