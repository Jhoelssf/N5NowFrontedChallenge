import { useState } from "react"
import { PERMISSION_TYPES } from "../components/permissionTypes/permissionTypesData"

export const usePermissionTypes = ()=> {
    const [permissionTypes, setPermissionTypes] = useState(PERMISSION_TYPES)
    return { permissionTypes, setPermissionTypes }
  }
  