import React from 'react'
import PropTypes from 'prop-types'
import Input, { InputAdornment } from 'material-ui/Input'
import SearchIcon from 'material-ui-icons/Search'

const SearchInput = (props) => {
  const {
    id,
    placeholder,
    onKeywordChange
  } = props

  return (
    <Input
      id={ id }
      type="search"
      placeholder={ placeholder }
      startAdornment={ (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ) }
      onChange={ (e) => onKeywordChange(e.target.value) }
    />
  )
}

SearchInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onKeywordChange: PropTypes.func.isRequired
}

export default SearchInput
