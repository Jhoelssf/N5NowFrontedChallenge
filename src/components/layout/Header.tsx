import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

const useStyles = createUseStyles({
  root: {
    color: '#3f51b5'
  }
})

type HeaderN5Props = { logo: any }

export const HeaderN5 = ({ logo }: HeaderN5Props) => {
  const classes = useStyles()

  return (
    <AppBar
      position='static'
      classes={{ colorPrimary: classes.root }}
      sx={{ backgroundColor: (theme: any) => (theme.palette.mode === 'dark' ? '#1e1e1e' : 'white') }}>
      <Toolbar>
        <Link to={'/'}>
          <img src={logo} width='90' height='90' alt='logo' />
        </Link>
        <Typography variant='h6'>Permissions</Typography>
      </Toolbar>
    </AppBar>
  )
}
