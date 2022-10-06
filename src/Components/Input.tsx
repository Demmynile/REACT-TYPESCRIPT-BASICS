import React, { ChangeEvent } from "react"

 type InputProps = {
    value : string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
 }


export const Input = ({value , handleChange} : InputProps) => {
	// const handleChangeEvent = (e : ChangeEvent<HTMLInputElement>) =>  {
    //       console.log(e.target.value)
	// }
	return <input type = 'text' value = {value} onChange={handleChange} />
}