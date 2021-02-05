export default (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonStyle: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80px', maxHeight: '30px', minWidth: '70px', minHeight: '30px',
      fontSize: '10px'
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    },

  }
})