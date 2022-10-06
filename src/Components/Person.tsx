
import { personProps } from './Typee/Person.type'

const Person = (props : personProps) => {
  return (
	<div>
       {props.name.lastname}
	</div>
  )
}

export default Person