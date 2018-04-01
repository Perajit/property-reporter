import React from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'

const AppToolbarDrawer = (props) => {
  let { children, open, onToggleClick } = props

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={ open }
    >
      <div>
        <IconButton onClick={ onToggleClick }>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      { children }
    </Drawer>
  )
}

AppToolbarDrawer.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func
}

export default AppToolbarDrawer
