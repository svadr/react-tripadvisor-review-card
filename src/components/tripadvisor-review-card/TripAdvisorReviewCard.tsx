import React, { FC } from "react";
import userIcon from "../../assets/user-icon.jpeg";
import tripAdvisorLogo from "../../assets/trip-advisor-logo.png";
import { TruncatedTextLink } from "../truncated-text/TruncatedText";

export interface TripAdvisorReviewCardProps {
	avatarURL: string;
	rating: number;
	name: string;
	date: string;
	title: string;
	description: string;
	reviewURL: string;
}

export const TripAdvisorReviewCard: FC<TripAdvisorReviewCardProps> = ({
	avatarURL,
	rating,
	name,
	date,
	title,
	description,
	reviewURL,
}) => {
	if (!rating || !name || !date || !title || !description || !reviewURL) {
		return null;
	}

	const displayReviewScore = (rating: number) =>
		Array.from({ length: rating }, (_, index) => (
			<div key={index} className="rounded-full bg-emerald-500 h-4 w-4" />
		));

	return (
		<div className="container w-80 h-80 bg-stone-200 p-5 rounded-lg flex flex-col gap-3">
			<div className="container flex flex-col gap-2">
				<div className="container flex gap-4">
					<img className="h-11 w-11 rounded-full" src={avatarURL ? avatarURL : userIcon} />
					<div className="container leading-tight">
						<div className="text-base font-bold">{name}</div>
						<div className="text-sm opacity-50">{date}</div>
					</div>
				</div>
				<div className="container flex gap-0.5">
					{displayReviewScore(rating)}
				</div>
			</div>
			<div className="container flex flex-col">
				<div className="font-bold text-base">{title}</div>
				<div className="h-24">
					<TruncatedTextLink text={description} link={reviewURL} />
				</div>
			</div>
			<div className="container flex gap-4 mt-1">
				<img className="h-11 w-11 rounded-full" src={tripAdvisorLogo} />
				<div className="container leading-tight">
					<div className="text-base font-bold">Posted on</div>
					<div className="text-sm opacity-50">Tripadvisor</div>
				</div>
			</div>
		</div>
	);
};
