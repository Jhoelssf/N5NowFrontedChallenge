import Typography from '@mui/material/Typography'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { PERMISSION_TYPES } from './permissionTypesData'
import {PermissionTypeCard} from './PermissionTypeCard'

const useStyles = createUseStyles({
  headerView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  gridCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gridGap: '20px'
  }
})

export const  PermissionTypes = () =>{
  const classes = useStyles()

  return (
    <>
      <div className={classes.headerView}>
        <Typography variant='h4'>Permission Types</Typography>
      </div>
      <div className={classes.gridCards}>
        {Object.entries(PERMISSION_TYPES).map(([key, value]) => (
          <PermissionTypeCard key={key} title={`Permission ${key}`} text={`This permission is a ${value}`} />
        ))}
      </div>
    </>
  )
}
