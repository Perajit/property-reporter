import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import Tooltip from 'material-ui/Tooltip'
import SearchInput from 'components/SearchInput'
import { createToolbarStyles } from './PropertyListToolbarStyles'

const emptyFunction = () => {}

const PropertyListToolbar = (props) => {
  const {
    classes,
    selectedRows,
    onKeywordChange,
    onDeleteSelectedRows
  } = props
  const disableDeletion = !selectedRows || !selectedRows.length
  const handleDeleteButtonClick = (e) => {
    if (typeof onDeleteSelectedRows === 'function') {
      onDeleteSelectedRows()
    }
  }

  return (
    <Toolbar className={ classes.root }>
      <div className={ classes.stretch }>
        <SearchInput
          placeholder="Search for Properties"
          onKeywordChange={ onKeywordChange || emptyFunction }
        />
      </div>
      <div className={ classNames({ [classes.invisible]: disableDeletion }) }>
        <Tooltip title="Delete">
          <IconButton
            aria-label="Delete"
            onClick={ handleDeleteButtonClick || emptyFunction }
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  )
}

export default withStyles(createToolbarStyles())(PropertyListToolbar)
