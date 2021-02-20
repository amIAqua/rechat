import { FC } from 'react'
import { observer } from 'mobx-react'
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
} from '@material-ui/core'
import { userService } from '../../store/services/userService'

export const UserCard: FC = observer(() => {
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
            <img
              className='avatar'
              src='https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
            />
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
    </>
  )
})
