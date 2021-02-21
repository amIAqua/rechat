import { ChangeEvent, FC, useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  DialogContentText,
  DialogContent,
  Input,
} from '@material-ui/core'
import { userService } from '../../store/services/userService'

type ModalDialogProps = {
  open: boolean
  setModalIsVisible: (prev: any) => void
}

export const ModalDialog: FC<ModalDialogProps> = ({
  open,
  setModalIsVisible,
}) => {
  const [inputUrlField, setInputUrlField] = useState('')

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setInputUrlField(event.target.value)

  const closeHandler = () => setModalIsVisible((prev: boolean) => !prev)

  const addAvatarHandler = () => {
    userService.uploadAvatar(inputUrlField)

    closeHandler()
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={closeHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Paste your avatar url here'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Input
              onChange={changeHandler}
              style={{ width: '500px' }}
              type='text'
              placeholder='URL'
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={closeHandler}>
            Close
          </Button>
          <Button color='primary' autoFocus onClick={addAvatarHandler}>
            Add avatar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
