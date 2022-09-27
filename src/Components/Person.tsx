import React from 'react'

type personProps = {
	name : {
		firstname : string,
		lastname : string
	}
	
}

const Person = (props : personProps) => {
  return (
	<div>
       {props.name.lastname}
	</div>
  )
}

export default Person