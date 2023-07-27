import AddTaskIcon from '@mui/icons-material/AddTask'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import { Box, SvgIconTypeMap } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  cardContainer: {
    padding: '0 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
      transform: 'scale(1.02)',
      transition: 'all 0.3s ease-in-out'
    }
  }
})

type PermissionType = 'PERMISSION' | 'PERMISSION_TYPE'

type ListCardProps = {
  title: string
  typeItem: 'PERMISSION' | 'PERMISSION_TYPE'
  bodyComponent?: ReactNode
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
}

export const ListCard = ({ title, typeItem, bodyComponent, icon: IconCard }: ListCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardContainer}>
      <div className={classes.header}>
        {cardIcon[typeItem]}
        <IconCard />
        <CardHeader title={title} />
      </div>
      <Box sx={{}}></Box>
      {bodyComponent && <CardContent>{bodyComponent}</CardContent>}
    </Card>
  )
}

const cardIcon: { [key in PermissionType]: ReactNode } = {
  PERMISSION: <AddTaskIcon />,
  PERMISSION_TYPE: <FeaturedPlayListIcon />
}
