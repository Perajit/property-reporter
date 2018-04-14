import {
  SEARCH_INPUT_MAX_WIDTH
} from 'constants/configs'

export const createToolbarStyles = () => {
  return (theme) => ({
    root: {
      paddingRight: theme.spacing.unit
    },
    stretch: {
      flex: '1',
    },
    invisible: {
      visibility: 'hidden'
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
    searchInput: {
      width: `calc(100% - ${theme.spacing.unit}px)`,
      maxWidth: `${SEARCH_INPUT_MAX_WIDTH}px`
    },
    iconButton: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, .04)'
      }
    }
  })
}
