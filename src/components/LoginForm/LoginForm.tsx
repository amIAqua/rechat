import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { authService } from '../../store/services/authenticationService'

export const LoginForm: FC = () => {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    authService.login(nickname, password)
  }

  return (
    <>
      <h3>Auth 4</h3>
      <form onSubmit={submitHandler}>
        <input
          name='nickname'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setNickname(event.target.value)
          }
        ></input>
        <input
          name='password'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        ></input>
        <button type='submit'>Submit</button>
      </form>
      <NavLink to='/'>Main</NavLink>
    </>
  )
}
