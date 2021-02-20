import { FC, useEffect } from 'react'
import { UserCard } from '../UserCard/UserCard'
import { DialogsList } from '../DialogsList/DialogsList'
import { authService } from '../../store/services/authenticationService'
import { useHistory } from 'react-router-dom'
import { userService } from '../../store/services/userService'
import { DialogsSearch } from '../DialogsSearch/DialogsSearch'

export const DialogsWindow: FC = () => {
  const history = useHistory()

  useEffect(() => {
    userService.getUserDialogs(userService.user?._id!)
  }, [])

  const logoutHandler = () => {
    authService.logout()

    history.push('/login')
  }

  return (
    <>
      {/* <Button onClick={logoutHandler}>Logout</Button> */}
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
      </div>
    </>
  )
}
