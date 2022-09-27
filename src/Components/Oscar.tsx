import { ReactNode } from "react"

type OscarTypes = {
	children : ReactNode
}


export const Oscar  = (props: OscarTypes) => {
	return <div>{props.children}</div>
}