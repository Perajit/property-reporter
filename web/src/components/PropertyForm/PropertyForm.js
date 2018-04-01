import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import { PropertySummaryTable } from 'components/PropertySummary'

const itemTypeOptions = [
  { label: 'Sale', value: 'sale' }
]
const pTypeOptions = [
  { label: 'Condo', value: 'condo' }
]

const mapOptionToSelectItem = ({ label, value }) => (
  <MenuItem key={ value } value={ value }>{ label }</MenuItem>
)

const PropertyForm = () => {

  return (
    <form>
      <TextField label="Item ID" required />
      <TextField label="Item Type" value={ itemTypeOptions[0].value } select required>
        { itemTypeOptions.map(mapOptionToSelectItem) }
      </TextField>
      <TextField label="Item Type" value={ itemTypeOptions[0].value } select required>
        { pTypeOptions.map(mapOptionToSelectItem) }
      </TextField>
      <TextField label="Project Name" />
      <TextField label="Name" fullWidth required />
      <TextField label="Size" type="number" required />
      <TextField label="Price" type="number" required />
      <TextField label="Bedrooms" type="number" />
      <TextField label="Bathroom" type="number" />
      <TextField label="Detail URL" type="url" />
    </form>
  )
}

PropertyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default PropertyForm
