import { AddTask, FeaturedPlayList } from '@mui/icons-material'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import { ListCard } from './ListCard'

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '20px'
  }
})

export const HomePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.cardContainer}>
      <Link to='permissions'>
        <ListCard className={classes.cardStyle} title='Permissions' icon={AddTask} />
      </Link>
      <Link to='permission-types'>
        <ListCard className={classes.cardStyle} title='Permissions Type' icon={FeaturedPlayList} />
      </Link>
    </div>
  )
}
