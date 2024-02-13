import React from "react";

const TripAdvisorReviewSkeletonCardAndPostedOn = () => (
	<div className="container flex gap-4">
		<div className="h-10 w-10 rounded-full bg-stone-500" />
		<div className="w-24 bg-stone-400 rounded-lg h-10"></div>
	</div>
);

const TripAdvisorReviewSkeletonCard = () => (
	<div className="container w-80 h-80 bg-stone-200 p-5 rounded-lg animate-pulse">
		<TripAdvisorReviewSkeletonCardAndPostedOn />
		<div className="container mt-2">
			<div className="h-4 w-24 bg-stone-400 rounded-lg"></div>
		</div>
		<div className="container mt-3">
			<div className="h-4 w-32 bg-stone-400 rounded-lg"></div>
			<div className="mt-2 h-24 w-auto bg-stone-400 rounded-lg"></div>
		</div>
		<div className="mt-5">
            <TripAdvisorReviewSkeletonCardAndPostedOn />
        </div>
	</div>
);

export default TripAdvisorReviewSkeletonCard