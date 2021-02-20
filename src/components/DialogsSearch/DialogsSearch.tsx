import { FC } from 'react'
import { TextField } from '@material-ui/core'

export const DialogsSearch: FC = () => {
  return (
    <>
      <TextField
        style={{ marginLeft: '1rem', paddingBottom: '1rem', width: '18rem' }}
        size='small'
        id='outlined-basic'
        label='Search in dialogs'
        variant='outlined'
      />
    </>
  )
}
