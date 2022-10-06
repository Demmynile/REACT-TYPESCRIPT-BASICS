import React ,{ createContext , useState } from "react"

export type AuthUser = {
	name : string,
	email :  string
}

type UserContextProps = {
	children : React.ReactNode
}

type UserContextType = {
	user :  AuthUser | null,
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}



//create a context
export const userContext = createContext({} as UserContextType)


//create the function that passes the value

export const UserContextProvider = ({children } : UserContextProps) => {

	const [user , setUser] = useState<AuthUser | null>(null)

	return (
	
	<userContext.Provider value = {{user , setUser}}>

	</userContext.Provider>)
}


