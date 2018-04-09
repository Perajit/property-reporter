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
    title
  } = props

  return (
    <div>
      <Typography variant="headline" component="h3" className={ classes.title } gutterBottom>
        { title }
      </Typography>
      <Paper elevation={ 0 } className={ classes.root }>
        { children }
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.object
}

export default withStyles(getSheetStyles())(PaperSheet)
