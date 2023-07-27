import { Box } from '@mui/material'
import { createUseStyles } from 'react-jss'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Footer } from './Footer'
import { HeaderN5 } from './Header'

const useStyles = createUseStyles({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 999
  },
  content: {
    minHeight: 'calc(100vh - 150px)',
    paddingBottom: '75px',
    padding: '50px'
  },
  student: {
    border: '2px solid green',
    width: '40%',
    listStyleType: 'none'
  },
  studentDetails: {
    color: 'blue',
    fontSize: '23px'
  },
  cardStyle: {
    maxWidth: '350px'
  }
})

const tt = {
  position: 'sticky',
  top: 0,
  zIndex: 1
}

export const Layout = () => {
  const classes = useStyles()

  return (
    <>
      <Box
        component='header'
        sx={{ ...tt, backgroundColor: (theme: any) => (theme.palette.mode === 'dark' ? '#134266' : 'white') }}>
        <HeaderN5 logo={logo} />
      </Box>

      <Box
        className={classes.content}
        sx={{ backgroundColor: theme => (theme.palette.mode === 'dark' ? '#134266' : 'white') }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
