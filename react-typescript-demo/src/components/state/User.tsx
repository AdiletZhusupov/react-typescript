import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null)
  const handleLogin = () => {
    setUser({name: "Adilet", email: "adilet.zhusupov@gmail.com"})
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? 
        <>      
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </> : <div>Hello Guest!</div>}

    </div>
  )
}