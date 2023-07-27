import EditIcon from '@mui/icons-material/Edit'
import { IconButton, TableCell, TableRow } from '@mui/material'
import { usePermissionTypes } from '../hooks/usePermissionTypes'
import { Permission } from './permissions/Permissions'

type PermissionsTableRowProps = {
  permission: Permission
  index: number
  onEditPermissions: (selectedPermission: Permission) => void
}

export const PermissionsTableRow = ({ onEditPermissions, permission, index }: PermissionsTableRowProps) => {
  const { employeeForename, employeeSurname, permissionDate, id, permissionTypeId } = permission
  const { permissionTypes } = usePermissionTypes()
  return (
    <TableRow key={id}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{employeeForename}</TableCell>
      <TableCell>{employeeSurname}</TableCell>
      <TableCell>{permissionTypes[permissionTypeId] ?? '--'}</TableCell>
      <TableCell>{permissionDate.toISOString()}</TableCell>
      <TableCell>
        <IconButton aria-label='edit' onClick={() => onEditPermissions(permission)}>
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
