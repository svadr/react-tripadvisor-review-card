import React from "react";
import {Meta, Story} from '@storybook/react'
import { TripAdvisorReviewCard, TripAdvisorReviewCardProps } from "../TripAdvisorReviewCard";

export default {
    title: 'Components/TripAdvisorReviewCard',
    component: TripAdvisorReviewCard
} as Meta;

const Template: Story<TripAdvisorReviewCardProps> = (args) => <TripAdvisorReviewCard {...args} />

export const TripAdvisorReviewCardExample= Template.bind({});
TripAdvisorReviewCardExample.args = {
    avatarURL: "",
    rating: 5,
	name: "Salvador B",
	date: "January 24, 2024",
	title: "Great experience!",
	description: "Some wonderful experience descriptiona ds asdas das d asd asdasdasdasd asdasdasdas asdasdasdasd dasdasdasdas asdasdas asdasdasdasdsadasdasdasdasd",
	reviewURL: "https://someexample.com"
}

