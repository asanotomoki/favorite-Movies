import React from "react";
import { PrimaryText } from "../shared/Text/Text/PrimaryText";
import { PrimaryTitle } from "../shared/Text/Title/PrimaryTitle";

type Props = {
	original_language: string;
	title: string;
	original_title: string;
	overview: string;
}

export const DetailText: React.FC<Props> = (props) => {
	const { original_language, title, original_title, overview } = props;
	return (
		<>
			<dl>
				<dt><PrimaryText>Original Language</PrimaryText></dt>
				<dd><PrimaryText>{original_language}</PrimaryText></dd>
				<dt><PrimaryText>タイトル</PrimaryText></dt>
				<dd><PrimaryTitle>{title}</PrimaryTitle></dd>
				<dt><PrimaryText>Original Title</PrimaryText></dt>
				<dd><PrimaryText>{original_title}</PrimaryText></dd>
				<dt><PrimaryText>Overview</PrimaryText></dt>
				<dd><PrimaryText>{overview}</PrimaryText></dd>
			</dl>
		</>
	)
}