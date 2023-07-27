import { Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'

type PermissionTypeCardProps = { title:string, text:string }

export const PermissionTypeCard = ({ title, text }:PermissionTypeCardProps) => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardContent>
          <Typography variant='h5' component='h2' gutterBottom>
            {title}
          </Typography>
          <Typography variant='body1' component='p'>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}
