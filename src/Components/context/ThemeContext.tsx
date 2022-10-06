 import { createContext, ReactNode} from "react";
import { theme } from "./theme";
 


type ThemeContextProps = {
	children : ReactNode
}

 export const ThemeContext = createContext(theme)


export const ThemeContextProvider = ({children} : ThemeContextProps) => {
  return <ThemeContext.Provider  value = {theme}>
   {children}
  </ThemeContext.Provider>
}
 