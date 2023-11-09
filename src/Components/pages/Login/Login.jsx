import React, { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'

const Login = () => {
  const {user, setUser} = useContext(AuthContext)

  return (
    <div>
      {!!user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : <button onClick={() => setUser({
        name: 'Tohir'
        
      })}>Login</button>}
    </div>
  )
}

export default Login