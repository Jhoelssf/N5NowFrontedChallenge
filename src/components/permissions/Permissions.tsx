import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { PermissionsData, usePermissions } from '../../hooks/usePermissions'
import { Post, Put } from '../../lib'
import { PermissionsTableRow } from '../PermissionsTableRow'
import { BASE_URL_PERMISSIONS } from '../constants/connection'
import PermissionModal from './PermissionModal'

const useStyles = createUseStyles({
  headerView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export type Permission = {
  employeeForename: string
  employeeSurname: string
  permissionDate: Date
  permissionTypeId: number
  id: number
  isNew?: boolean
}

export const Permissions = () => {
  const classes = useStyles()
  const [permissionModalData, setPermissionModalData] = useState<Permission | null>(null)
  const { permissions, setPermissions } = usePermissions()

  const onAddPermissions = useCallback(() => {
    const newPermission: Permission = {
      id: permissions.length + 1,
      employeeForename: '',
      employeeSurname: '',
      permissionTypeId: 1,
      permissionDate: new Date(),
      isNew: true
    }
    setPermissionModalData(newPermission)
  }, [permissions])

  const onEditPermissions = (selectedPermission: Permission) => {
    setPermissionModalData(selectedPermission)
  }

  const onCloseModal = () => {
    setPermissionModalData(null)
  }

  /**
   * this will manage add and update
   */
  const handleSubmitForm = async (formValues: Permission) => {
    setPermissionModalData(null)
    let data: PermissionsData = {
      id: formValues.id,
      employeeForename: formValues.employeeForename,
      employeeSurname: formValues.employeeSurname,
      permissionDate: formValues.permissionDate,
      permissionTypeId: formValues.permissionTypeId
    }
    if (formValues.isNew) {
      const response: { data: { id: number } } = await Post(`${BASE_URL_PERMISSIONS}`, data)
      formValues.id = response?.data?.id
      delete formValues.isNew
      setPermissions(prev => [...prev, formValues])
    } else {
      Put(`${BASE_URL_PERMISSIONS}/${formValues.id}`, data)
      delete formValues.isNew
      setPermissions(prev => prev.map(c => (c.id === formValues.id ? formValues : c)))
    }
  }

  return (
    <>
      <div className={classes.headerView}>
        <Typography variant='h4'>Permissions</Typography>
        <Button variant='contained' color='primary' onClick={onAddPermissions}>
          Add Permission
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Permission</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {permissions && (
            <TableBody>
              {permissions.map((row, index) => (
                <PermissionsTableRow
                  key={row.id}
                  permission={row}
                  onEditPermissions={onEditPermissions}
                  index={index}
                />
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {permissionModalData && (
        <PermissionModal
          isModalOpenInitial={permissionModalData}
          onCloseModal={onCloseModal}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  )
}
