import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { FooterModal } from '../Shared/Modals/FooterModal'
import { Permission } from './Permissions'

const useStyles = createUseStyles({
  bodyForm: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > *': {
      width: '100%'
    }
  }
})

type PermissionModalProps = {
  isModalOpenInitial: Permission
  handleSubmitForm: (formValues: Permission) => void
  onCloseModal: () => void
}

export const PermissionModal = ({ isModalOpenInitial, handleSubmitForm, onCloseModal }: PermissionModalProps) => {
  const classes = useStyles()
  const [formValues, setFormValues] = useState<Permission>(isModalOpenInitial)

  const handleChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const handlePermissionTypeChange = (event: any) => {
    setFormValues({
      ...formValues,
      permissionTypeId: event.target.value
    })
  }

  const handlePermissionDateChange = (date: any) => {
    setFormValues({
      ...formValues,
      permissionDate: date
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    handleSubmitForm(formValues)
    onCloseModal()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Dialog open={Boolean(isModalOpenInitial)} onClose={onCloseModal}>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <div className={classes.bodyForm}>
                <TextField
                  label='Employee Forename'
                  name='employeeForename'
                  value={formValues.employeeForename ? formValues.employeeForename : ''}
                  onChange={handleChange}
                />
                <TextField
                  label='Employee Surname'
                  name='employeeSurname'
                  value={formValues.employeeSurname ? formValues.employeeSurname : ''}
                  onChange={handleChange}
                />
                <Select
                  labelId='permission-type-id-label'
                  id='permission-type-id'
                  name='permissionTypeId'
                  value={formValues.permissionTypeId ? formValues.permissionTypeId : 0}
                  onChange={handlePermissionTypeChange}
                  label='Permission Type ID'>
                  <MenuItem value={0}>
                    <em>Select one option</em>
                  </MenuItem>
                  <MenuItem value={1}>Vacation</MenuItem>
                  <MenuItem value={2}>Sick Leave</MenuItem>
                  <MenuItem value={3}>Maternity Leave</MenuItem>
                  <MenuItem value={4}>Paternity Leave</MenuItem>
                  <MenuItem value={5}>Bereavement Leave</MenuItem>
                  <MenuItem value={6}>Other</MenuItem>
                </Select>
                <DesktopDatePicker
                  label='Date desktop'
                  inputFormat='MM/DD/YYYY'
                  value={dayjs(formValues.permissionDate ? formValues.permissionDate : '')}
                  onChange={handlePermissionDateChange}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </div>
              <FooterModal onCloseModal={onCloseModal} onSubmit={() => {}} />
            </form>
          </DialogContent>
        </Dialog>
      </LocalizationProvider>
    </>
  )
}

export default PermissionModal
