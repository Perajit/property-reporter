import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import { mapOptionToSelectItem } from './PropertyFormHelper'
import { getFormStyles } from './PropertyFormStyles'

const itemTypeOptions = [
  { label: 'Sale', value: 'sale' }
]

const pTypeOptions = [
  { label: 'Condo', value: 'condo' }
]

const PropertyForm = (props) => {
  let { classes } = props
  
  return (
    <div className={ classes.root }>
      <Grid container>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="itemType" label="Item Type" value={ itemTypeOptions[0].value } select fullWidth required>
            { itemTypeOptions.map(mapOptionToSelectItem) }
          </TextField>
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="itemType" label="Property Type" value={ pTypeOptions[0].value } select fullWidth required>
            { pTypeOptions.map(mapOptionToSelectItem) }
          </TextField>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField id="projectName" label="Project Name" fullWidth />
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="itemId" label="Item ID" fullWidth required />
        </Grid>
        <Grid item xs={ 12 } sm={ 9 }>
          <TextField id="name" label="Name" fullWidth required />
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="size" label="Size (Sq.m)" type="number" fullWidth required />
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="price" label="Price (฿)" type="number" fullWidth required />
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="bedrooms" label="Bedrooms" type="number" fullWidth />
        </Grid>
        <Grid item xs={ 12 } sm={ 3 }>
          <TextField id="bathrooms" label="Bathrooms" type="number" fullWidth />
        </Grid>
        <Grid item xs={ 12 }>
          <TextField id="detailUrl" label="Detail URL" type="url" fullWidth />
        </Grid>
      </Grid>
    </div>
  )
}

PropertyForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(getFormStyles())(PropertyForm)
