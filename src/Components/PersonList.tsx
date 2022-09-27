

type PersonListProps = {

	name : {
		first : string,
		last : string
	}[]
}

const PersonList = (props : PersonListProps)  => {

	return (
		<>
		<div>
			{props.name.map(item => (
				<>
				 {item.first}
				 {item.last}
				</>
			))}
		</div>
		</>
	)
}

export default PersonList