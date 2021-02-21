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
import { dialogService } from '../../store/services/dialogService'

type StartChatModalDialogProps = {
  open: boolean
  setModalVisible: (prev: any) => void
}

export const StartChatModalDialog: FC<StartChatModalDialogProps> = ({
  open,
  setModalVisible,
}) => {
  const [companionName, setCompanionName] = useState<string | null>(null)

  const startChatHandler = () => {
    dialogService.createDialog(companionName!)

    closeHandler()
  }

  const closeHandler = () => setModalVisible((prev: boolean) => !prev)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanionName(event.target.value)
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
          {'Type the person you want to chat with'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Input
              onChange={changeHandler}
              style={{ width: '500px' }}
              type='text'
              placeholder='Name'
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={closeHandler}>
            Close
          </Button>
          <Button color='primary' autoFocus onClick={startChatHandler}>
            Start chat
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
