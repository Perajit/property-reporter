import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = (theme) => ({
  root: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit
  })
})

const PaperSheet = (props) => {
  const { classes, title, children } = props

  return (
    <div>
      <Typography variant="headline" component="h3" gutterBottom>
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

export default withStyles(styles)(PaperSheet)