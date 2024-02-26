# react-tripadvisor-review-card

## Description

`react-tripadvisor-review-card` is a React component designed to display beautiful cards for showcasing reviews from TripAdvisor. This component is built using React, TypeScript, and styled with Tailwind CSS. Additionally, it comes with Storybook for easy development and testing.

## Installation

To install and use this component in your project, follow these steps:

1. Install the package from npm:

   ```bash
   npm install react-tripadvisor-review-card

## Import the component into your file:

```js
import TripAdvisorReviewCard from 'react-tripadvisor-review-card';
```

## Use the component in your application

```js
const props = {
  avatarURL: "https://example.com/img.png",
  rating: 5,
  name: "Salvador B",
  date: "January 24, 2024",
  title: "Great experience!",
  description: "Some wonderful experience descriptiona ds asdas das d asd asdasdasdasd asdasdasdas asdasdasdasd dasdasdasdas asdasdas asdasdasdasdsadasdasdasdasd",
  reviewURL: "https://example.com"
}

<TripAdvisorReviewCard {...props} />
```

## UI Design

<img src="./src/assets/demo-min.png">

## Storybook

```bash
npm run storybook
```

## Contributing

If you want to contribute to this project, follow these steps:

- Fork the repository.
- Clone the repository to your local machine.
- Create a branch for your contribution: git checkout -b branch-name.
- Make your changes and commit: git commit -m "Description of the changes".
- Push to your fork: git push origin branch-name.
- Create a pull request on this repository.

## LICENCE

This project is licensed under the MIT License - see the LICENSE.md file for details.