import React, { FC } from "react";
export const TruncatedText: FC<{ text: string; limit?: number }> = ({
	text,
	limit = 25,
}) => {
	if (text.length <= limit) {
		return <span>{text}</span>;
	}

	const truncatedText = text.slice(0, limit);

	return <span>{truncatedText}...</span>;
};

export const TruncatedTextLink: FC<{
	text: string;
	limit?: number;
	link: string;
	newTab?: boolean;
}> = ({ text, limit = 80, link, newTab = true }) => {
	return (
		<div className="container flex flex-col gap-0.5">
			<TruncatedText text={text} limit={limit} />
			{text.length >= limit ? (
				<a
					href={link}
					className="text-stone-400"
					target={newTab ? "__blank" : ""}
				>
					Read More
				</a>
			) : null}
		</div>
	);
};
