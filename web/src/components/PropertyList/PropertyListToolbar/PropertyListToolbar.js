import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Tooltip from 'material-ui/Tooltip'
import IconButton from 'material-ui/IconButton'
import PlaylistAddIcon from 'material-ui-icons/PlaylistAdd'
import DeleteIcon from 'material-ui-icons/Delete'
import Hidden from 'material-ui/Hidden'
import SearchInput from 'components/SearchInput'
import { createToolbarStyles } from './PropertyListToolbarStyles'

const PropertyListToolbar = (props) => {
  const {
    classes,
    disableSearch,
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
          readOnly={ disableSearch }
          placeholder="Search for Properties"
          className={ classes.searchInput }
          onKeywordChange={ onKeywordChange }
        />
      </div>
      <div>
        <IconButton
          aria-label="Delete"
          className={ classNames(classes.iconButton, { [classes.invisible]: !selectedRows.length }) }
          onClick={ handleDeleteButtonClick }
        >
          <DeleteIcon />
        </IconButton>
        <Link to="/properties/add">
          <IconButton
            aria-label="PlaylistAdd"
            className={ classes.iconButton }
          >
            <PlaylistAddIcon />
          </IconButton>
        </Link>
      </div>
    </Toolbar>
  )
}

PropertyListToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  disableSearch: PropTypes.bool.isRequired,
  selectedRows: PropTypes.array.isRequired,
  onDeleteSelectedRows: PropTypes.func,
  onKeywordChange: PropTypes.func
}

PropertyListToolbar.defaultProps = {
  selectedRows: []
}

export default withStyles(createToolbarStyles())(PropertyListToolbar)
