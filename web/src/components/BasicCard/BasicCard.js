import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { getCardStyles } from './BasicCardStyles'

const BasicCard = (props) => {
  const {
    classes,
    children,
    title
  } = props

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

BasicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.object
}

export default withStyles(getCardStyles())(BasicCard)
