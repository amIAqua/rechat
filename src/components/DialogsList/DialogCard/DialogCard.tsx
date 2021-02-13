import { FC } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export const DialogCard: FC = () => {
  return (
    <>
      <Card className='dialog-card'>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            dialog
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
