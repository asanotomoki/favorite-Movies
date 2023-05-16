import React from "react";
import style from "styled-components";

type Props = {
	placeholder: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PrimaryInput: React.FC<Props> = (props) => {
	const { placeholder, onChange } = props;

	return (
		<SInput type="text" placeholder={placeholder} onChange={onChange} />
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
