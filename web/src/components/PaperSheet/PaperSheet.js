import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { getSheetStyles } from './PaperSheetStyles'

const PaperSheet = (props) => {
  const {
    classes,
    children,
    title,
    TitleIcon
  } = props

  return (
    <div>
      <Typography
        variant="headline"
        component="h3"
        className={ classes.title }
        gutterBottom
      >
        { TitleIcon ? <TitleIcon className={ classes.titleIcon } /> : null }
        { title }
      </Typography>
      { children }
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
  title: PropTypes.string
}

export default withStyles(getSheetStyles())(PaperSheet)
