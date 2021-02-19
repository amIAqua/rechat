import { FC } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { userService } from '../../store/services/userService'

export const UserCard: FC = () => {
  return (
    <>
      <Card
        className='user-info-card'
        style={{ borderRadius: '15px', height: '100px' }}
      >
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            {userService.user!.name}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
