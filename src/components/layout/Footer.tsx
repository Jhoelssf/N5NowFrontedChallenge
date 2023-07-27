import { Box } from '@mui/material'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export const Footer = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        minHeight: '75px',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: (theme: any) => (theme.palette.mode === 'dark' ? '#1e1e1e' : 'white')
      }}>
      <Typography variant='body2' color='textSecondary' align='center'>
        © 2021 N5Now. All rights reserved.
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        <Link color='inherit' href='#'>
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link color='inherit' href='#'>
          Terms of Use
        </Link>
      </Typography>
    </Box>
  )
}
