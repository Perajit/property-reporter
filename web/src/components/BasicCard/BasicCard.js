import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import FetchableView from 'components/FetchableView'
import { getCardStyles } from './BasicCardStyles'

const BasicCard = (props) => {
  const {
    classes,
    children,
    title,
    isFetching
  } = props

  return (
    <Card>
      <CardContent>
        <Typography variant="title" component="h2" gutterBottom className={ classes.title }>
          { title }
        </Typography>
        <FetchableView isFetching={ isFetching }>
          { children }
        </FetchableView>
      </CardContent>
    </Card>
  )
}

BasicCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object,
  title: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}

export default withStyles(getCardStyles())(BasicCard)
