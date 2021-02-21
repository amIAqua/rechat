import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { Card, CardContent, Typography, Icon } from '@material-ui/core'
import { userService } from '../../store/services/userService'
import { UserAvatar } from '../UserAvatar/UserAvatar'
import { ModalDialog } from '../ModalDialog/ModalDialog'

export const UserCard: FC = observer(() => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <>
      <Card
        className='user-info-card'
        style={{
          borderRadius: '1rem 0 0 0 ',
          height: '100px',
          background: '#f2f2ff',
          boxShadow: 'none',
        }}
      >
        {userService.user ? (
          <div className='user-info'>
            <UserAvatar />
            <label
              className='add-avatar-btn'
              onClick={() => setModalIsVisible((prev) => !prev)}
            >
              <Icon>add_circle</Icon>
            </label>

            <CardContent>
              <Typography
                color='textSecondary'
                variant='h6'
                style={{ fontWeight: 'bold', color: '#6369ff' }}
              >
                {userService.user.name}
              </Typography>
            </CardContent>
          </div>
        ) : null}
      </Card>
      <ModalDialog
        open={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
    </>
  )
})
