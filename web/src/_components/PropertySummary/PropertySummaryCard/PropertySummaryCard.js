import React from 'react'
import { Link } from 'react-router-dom'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import PropertySummary from '../PropertySummary'

const PropertySummaryCard = (props) => {
  const { title, data, detailLink } = props

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="title" component="h2">
            { title }
          </Typography>
          <PropertySummary data={ data } />
        </CardContent>
        { detailLink ? createCardAction(detailLink) : null }
      </Card>
    </div>
  )
}

function createCardAction(detailLink) {
  return (
    <CardActions>
      <Button
        component={  Link }
        to={ detailLink }
      >
        View Detail
      </Button>
    </CardActions>
  )
}

export default PropertySummaryCard
