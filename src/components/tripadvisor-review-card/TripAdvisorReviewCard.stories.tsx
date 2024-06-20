import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  TripAdvisorReviewCard,
  TripAdvisorReviewCardProps,
} from "../TripAdvisorReviewCard";

export default {
  title: "Components/TripAdvisorReviewCard",
  component: TripAdvisorReviewCard,
} as Meta;

const Template: Story<TripAdvisorReviewCardProps> = (args) => (
  <TripAdvisorReviewCard {...args} />
);

export const TripAdvisorReviewCardExample = Template.bind({});
TripAdvisorReviewCardExample.args = {
  avatarURL: "",
  rating: 5,
  name: "Salvador B",
  date: "January 24, 2024",
  title: "Great experience!",
  description:
    "I recently dined at La Belle Cuisine and had an extraordinary experience. From the moment I walked in, the ambiance was warm and inviting, with tasteful decor and soft lighting that created a cozy atmosphere.",
  reviewURL: "https://someexample.com",
};
