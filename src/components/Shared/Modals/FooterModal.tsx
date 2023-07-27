import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import Divider from '@mui/material/Divider'

type FooterModalProps = { onCloseModal: any; onSubmit: any }

export const FooterModal = ({ onCloseModal, onSubmit }: FooterModalProps) => {
  return (
    <>
      <Divider />
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variant='contained' color='primary' type='submit' onClick={onSubmit}>
          Submit
        </Button>
      </DialogActions>
    </>
  )
}
