import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { mapOptionToSelectItem } from './PropertyFormHelper'
import { getFormStyles } from './PropertyFormStyles'

const itemTypeOptions = [
  { label: 'Sale', value: 'sale' }
]

const pTypeOptions = [
  { label: 'Condo', value: 'condo' }
]

class PropertyForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    formData: {
      itemType: itemTypeOptions[0].value,
      pType: pTypeOptions[0].value
    }
  }

  updateFormData = (formData) => {
    this.setState({ formData })
  }

  handleChange = (e) => {
    let target = e.target
    let value = target.type === 'number' ? Number(target.value) : target.value
    let newFormData = Object.assign({}, this.state.formData, {
      [target.id]: value
    })

    this.updateFormData(newFormData)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let { onSubmit } = this.props
    let { formData } = this.state

    onSubmit(formData)
  }

  componentWillReceiveProps(nextProps) {
    let nextFormData = Object.assign({}, nextProps.data)
    nextFormData.itemType = nextFormData.itemType || itemTypeOptions[0].value
    nextFormData.pType = nextFormData.pType || pTypeOptions[0].value

    this.updateFormData(nextFormData)
  }

  render() {
    let {
      classes,
      onClose
    } = this.props

    let { formData } = this.state
    
    formData = formData || {}
    
    return (
      <form noValidate autoComplete="off"
        className={ classes.root }
        onSubmit={ this.handleSubmit }
      >
        <Grid container alignItems="flex-start">
          <Grid item xs={ 12 } md={ 3 }>
            <TextField select fullWidth required
              id="itemType"
              label="Item Type"
              className={ classes.textField }
              value={ formData.itemType }
              onChange={ this.handleChange }
            >
              { itemTypeOptions.map(mapOptionToSelectItem) }
            </TextField>
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField select fullWidth required
              id="pType"
              label="Property Type"
              className={ classes.textField }
              value={ formData.pType }
              onChange={ this.handleChange }
            >
              { pTypeOptions.map(mapOptionToSelectItem) }
            </TextField>
          </Grid>
          <Grid item xs={ 12 } md={ 6 }>
            <TextField fullWidth
              id="projectName"
              label="Project Name"
              className={ classes.textField }
              value={ formData.projectName || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField fullWidth required
              id="id"
              label="Item ID"
              className={ classes.textField }
              value={ formData.id || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 9 }>
            <TextField fullWidth required
              id="name"
              label="Name"
              className={ classes.textField }
              value={ formData.name || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField fullWidth required
              type="number"
              id="size"
              label="Size (Sq.m)"
              className={ classes.textField }
              value={ formData.size || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField fullWidth required
              type="number"
              id="price"
              label="Price (฿)"
              className={ classes.textField }
              value={ formData.price || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField fullWidth
              type="number"
              id="bedrooms"
              label="Bedrooms"
              className={ classes.textField }
              value={ formData.bedrooms || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 } md={ 3 }>
            <TextField fullWidth
              type="number"
              id="bathrooms"
              label="Bathrooms"
              className={ classes.textField }
              value={ formData.bathrooms || '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField fullWidth
              type="url"
              id="detailUrl"
              label="Detail URL"
              className={ classes.textField }
              value={ formData.detailUrl ? decodeURI(formData.detailUrl) : '' }
              onChange={ this.handleChange }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Button type="submit" variant="raised" color="secondary" className={ classes.button }>Submit</Button>
            <Button
              variant="raised"
              onClick={ onClose }
              className={ classes.button }
            >Close</Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(getFormStyles())(PropertyForm)
