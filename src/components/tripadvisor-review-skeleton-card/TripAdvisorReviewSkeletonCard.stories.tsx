import React from "react";
import { Meta, Story } from "@storybook/react";
import TripAdvisorReviewSkeletonCard from "../tripadvisor-review-skeleton-card/TripAdvisorReviewSkeletonCard";

export default {
	title: "Components/TripAdvisorReviewSkeletonCard",
	component: TripAdvisorReviewSkeletonCard,
} as Meta;

const Template: Story = () => <TripAdvisorReviewSkeletonCard />;

export const TripAdvisorReviewSkeletonCardExample = Template.bind({});
