export const createStyles = () => (theme) => ({
  root: {
    position: 'relative',
    minHeight: '100px'
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    background: 'rgba(255, 255, 255, .54)'
  },
  invisible: {
    visibility: 'hidden'
  },
  hidden: {
    display: 'none'
  }
})
