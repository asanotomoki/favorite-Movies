import React from "react";
import style from "styled-components";

type Props = {
	placeholder: string;
}

export const PrimaryInput: React.FC<Props> = (props) => {
	const { placeholder} = props;

	return (
		<SInput type="text" placeholder={placeholder} />
	)
}

const SInput = style.input`
	width: 100%;
	max-width: 300px;
	height: 42px;
	border: none;
	border-radius: 3px;
	outline: none;
	font-size: 1rem;
	padding: 0 20px;
	background-color: #525252;
	color: #fff;
`;
