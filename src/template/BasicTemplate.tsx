import React from "react";
import { Header } from "../components/header";

type Props = {
	children: React.ReactNode;
}

export const BasicTemplate: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			{props.children}
		</>
	)
}