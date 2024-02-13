import { FC } from "react";
export interface TripAdvisorReviewCardProps {
    avatarURL: string;
    rating: number;
    name: string;
    date: string;
    title: string;
    description: string;
    reviewURL: string;
}
export declare const TripAdvisorReviewCard: FC<TripAdvisorReviewCardProps>;
