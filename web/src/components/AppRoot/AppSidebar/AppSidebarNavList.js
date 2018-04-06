import React from 'react'
import { withStyles } from 'material-ui/styles'
import NavList from 'components/NavList'
import { createNavListStyles } from './AppSidebarStyles'

const appIconSrc = '/assets/icon.png' // FIXME: Extract as a constant

export default withStyles(createNavListStyles())(NavList)
