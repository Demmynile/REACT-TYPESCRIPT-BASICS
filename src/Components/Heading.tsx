

type headerTypes = {
	children : string
}


export const Heading  = (props: headerTypes) => {
	return <h2>{props.children}</h2>
}