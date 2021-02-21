import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { userService } from '../../store/services/userService'

export const UserAvatar: FC = observer(() => {
  // TODO: MAKE IT RERENDER AFTER AVATAR CHANGES
  return (
    <>
      {userService.userAvatar ? (
        <img
          alt='avatar'
          className='avatar'
          key={userService.userAvatar}
          src={userService.userAvatar}
        />
      ) : (
        <img
          alt='avatar'
          className='avatar'
          src='https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
        />
      )}
    </>
  )
})
