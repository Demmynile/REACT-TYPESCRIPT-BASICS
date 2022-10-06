import {useReducer} from 'react'

type CountState = {
	count : number
}



type UpdateAction = {
	type : 'INCREMENT' | 'DECREMENT',
	payload : number

}

type ResetAction = {
	type : 'RESET'
}

type CounterAction = UpdateAction | ResetAction
const intialstate = {
	count : 0
}

const reducer = (state : CountState , action : CounterAction) => {
	switch(action.type){
		case 'INCREMENT':
			return {count : state.count + action.payload}
		case 'DECREMENT':
			return {count : state.count - action.payload}
		case 'RESET':
			return intialstate
		default :
		   return state
	}

}

export const Counter = () => {
 const [state , dispatch] = useReducer(reducer , intialstate)

	return (
     <>
         count : {state.count}
		 <button onClick = {() => dispatch({type : 'INCREMENT' , payload: 10})}>
			Increment 10
		 </button>
		 <button onClick = {() => dispatch({type : 'DECREMENT' , payload: 10})}>
			Decrement 10
		 </button>
		 <button onClick = {() => dispatch({type : 'RESET'})}>
			Reset
		 </button>
	 </>
	)
}