import { useEffect, useState } from 'react'
import { BASE_URL_PERMISSIONS } from '../components/constants/connection'
import { Permission } from '../components/permissions/Permissions'
import { Get } from '../lib'

export type PermissionsData = {
  employeeForename: string
  employeeSurname: string
  permissionDate: Date
  permissionTypeId: number
  id: number
}

export const usePermissions = () => {
  const [permissions, setPermissions] = useState<Permission[]>([])

  useEffect(() => {
    const getPermissions = async () => {
      const res: { data: PermissionsData[] } = await Get(`${BASE_URL_PERMISSIONS}`)
      if (!res) return
      const newPermissions: Permission[] = res.data.map(c => ({
        ...c,
        permissionDate: new Date(c.permissionDate)
      }))
      setPermissions(newPermissions)
    }
    getPermissions()
  }, [])

  return { permissions, setPermissions }
}
