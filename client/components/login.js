import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginField, updatePasswordField, signIn } from '../redux/reducers/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const login = useSelector((s) => s.auth.login)
  const password = useSelector((s) => s.auth.password)

  return (
    <div className="bg-gray-200 h-screen w-screen flex justify-center align-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-8">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            value={login}
            onChange={(e) => {
              dispatch(updateLoginField(e.target.value))
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => {
              dispatch(updatePasswordField(e.target.value))
            }}
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              dispatch(signIn())
            }}
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
