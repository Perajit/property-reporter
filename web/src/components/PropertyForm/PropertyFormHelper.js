import React from 'react'
import MenuItem from 'material-ui/Menu/MenuItem'

export const mapOptionToSelectItem = ({ label, value }) => (
  <MenuItem key={ value } value={ value }>{ label }</MenuItem>
)
