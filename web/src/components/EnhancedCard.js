import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import grey from 'material-ui/colors/grey'

const styles = (theme) => ({
  title: {
    borderBottom: `solid 2px ${theme.palette.divider}`,
    margingBottom: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    color: theme.palette.secondary.light
  }
})

const EnhancedCard = (props) => {
  const { classes, title, children } = props

  return (
    <Card>
      <CardContent>
        <Typography variant="title" component="h2" gutterBottom className={ classes.title }>
          { title }
        </Typography>
        { children }
      </CardContent>
    </Card>
  )
}

EnhancedCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.object
}

export default withStyles(styles)(EnhancedCard)
