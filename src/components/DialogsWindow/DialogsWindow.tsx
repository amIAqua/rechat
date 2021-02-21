import { FC, useEffect, useState } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { DialogsList } from '../DialogsList/DialogsList'
import { useHistory } from 'react-router-dom'
import { userService } from '../../store/services/userService'
import { DialogsSearch } from '../DialogsSearch/DialogsSearch'
import { Button } from '@material-ui/core'
import { StartChatModalDialog } from '../StartChatModalDialog/StartChatModalDialog'

export const DialogsWindow: FC = () => {
  const [modalIsVisible, setModalVisible] = useState(false)
  const history = useHistory()

  useEffect(() => {
    userService.getUserDialogs(userService.user?._id!)
  }, [])

  // TODO: UNCOMMENT LOGOUT HANDLER WHEN UI FOR LOGOUT WILL BE CREATED

  // const logoutHandler = () => {
  //   authService.logout()

  //   history.push('/login')
  // }

  return (
    <>
      <div className='dialogs-window'>
        <UserCard />
        <div
          style={{
            marginTop: '1rem',
            borderBottom: '1px solid #ccc',
          }}
        >
          <DialogsSearch />
        </div>
        <DialogsList />
        <div className='start-btn-container'>
          <Button
            className='start-btn'
            variant='contained'
            color='primary'
            onClick={() => setModalVisible((prev: boolean) => !prev)}
          >
            Start new chat
          </Button>
        </div>
      </div>
      <StartChatModalDialog
        open={modalIsVisible}
        setModalVisible={setModalVisible}
      />
    </>
  )
}
