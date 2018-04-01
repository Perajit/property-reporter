import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import SearchInput from 'components/SearchInput'
import { createToolbarStyles } from './PropertyListToolbarStyles'

const PropertyListToolbar = (props) => {
  const {
    classes,
    selectedRows,
    onDeleteSelectedRows,
    onKeywordChange
  } = props

  const handleDeleteButtonClick = (e) => {
    if (typeof onDeleteSelectedRows === 'function') {
      onDeleteSelectedRows()
    }
  }

  return (
    <Toolbar disableGutters className={ classes.root }>
      <div className={ classes.stretch }>
        <SearchInput
          placeholder="Search for Properties"
          onKeywordChange={ onKeywordChange }
        />
      </div>
      <div className={ classNames({ [classes.invisible]: !selectedRows.length }) }>
        <Tooltip title="Delete">
          <IconButton
            aria-label="Delete"
            onClick={ handleDeleteButtonClick }
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  )
}

PropertyListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedRows: PropTypes.array.isRequired,
  onDeleteSelectedRows: PropTypes.func,
  onKeywordChange: PropTypes.func
}

PropertyListToolbar.defaultProps = {
  selectedRows: []
}

export default withStyles(createToolbarStyles())(PropertyListToolbar)
