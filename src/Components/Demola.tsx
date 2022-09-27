
type nameProps = {
    name : string, 
	message ?: number,
	isLoggedIn : boolean,
}




const Demola = (props : nameProps) => {


	return (
		<>
		  <div>
			<h2>Welcome to {props.name} and {props.message} and {props.isLoggedIn}</h2>
		
		  </div>
		
		</>
	)
}

export default Demola