import { useContext } from "react"
import { userContext } from "./UserContext"


export const User = () => {

    const user = useContext(userContext)

	const handleLogin = () => {

			user.setUser({
			   name : 'Balogun',
			   email : 'balogun80@gmail.com'
			})
		
	}
	const handleLogout = () => {
     
		user.setUser(null)
	

	}
  return (
	<div>
		<button onClick={handleLogin}></button>
		<button onClick={handleLogout}></button>
		<div> User name is {user.user?.name} </div>
		<div> Email is  {user.user?.email}</div>
	</div>
  )
}

export default User