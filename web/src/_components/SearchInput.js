import React from 'react'
import Input, { InputAdornment } from 'material-ui/Input'
import SearchIcon from 'material-ui-icons/Search'

const SearchInput = (props) => {
  const {
    id,
    placeholder,
    autoFocus,
    onKeywordChange
  } = props

  return (
    <Input
      id={ id }
      type="search"
      placeholder={ placeholder }
      autoFocus={ autoFocus }
      startAdornment={ (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ) }
      onChange={ (e) => onKeywordChange(e.target.value) }
    />
  )
}

export default SearchInput
