"use client";

import { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "./ReviewsSlider.css";

const reviews = [
  {
    score: "10/10",
    rating: "Excellent",
    title: "",
    text:
      "The condo was very comfortable and clean. It had everything you would need for an enjoyable stay. Loved the pool. Close to everything. Would definitely stay there again.",
    liked:
      "cleanliness, check-in, communication, location, listing accuracy",
    name: "Suzanne H.",
    nights: "Stayed 14 nights",
    travel: "Traveled with partner",
  },
  {
    score: "10/10",
    rating: "Excellent",
    title: "",
    text:
      "Everything from booking our reservation; communication with the host; clean condo with comfortable beds, laundry facilities within the condo, well stocked kitchen; and beautiful property including pool was great with many attractions in the surrounding area (hikes, grocery stores, shops, etc.). Will recommend this property to many!",
    liked:
      "cleanliness, check-in, communication, location, listing accuracy, value for money",
    name: "Julie M.",
    nights: "Stayed 4 nights",
    travel: "Traveled with family",
  },
  {
    score: "10/10",
    rating: "Excellent",
    title: "Loved our stay and the pool view!",
    text:
      "We had a wonderful stay as a family of 4 and enjoyed the pool and the view. The unit was well stocked and had everything we needed. Very clean and comfortable as well. Thank you, we will be back!",
    liked:
      "cleanliness, check-in, communication, location, listing accuracy",
    name: "Colleen H.",
    nights: "Stayed 3 nights",
    travel: "Traveled with family and young children",
  },
  {
    score: "10/10",
    rating: "Excellent",
    title: "Great owner",
    text:
      "First time going through VRBO for a rental and it was great. Everything was so easy and the owner made our stay so enjoyable and helpful. Thank you.",
    liked:
      "cleanliness, check-in, communication, location, listing accuracy",
    name: "Lynne D.",
    nights: "Stayed 24 nights",
    travel: "Traveled with partner",
  },
];

export default function ReviewsSlider() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentReview((previous) => (previous + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextReview = () => {
    setCurrentReview((previous) => (previous + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (previous) => (previous - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[currentReview];

  return (
    <div
      className="reviews-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="review-slider-window">
        <article
          key={currentReview}
          className="guest-review"
          aria-live="polite"
          aria-label={`Guest review ${currentReview + 1} of ${reviews.length}`}
        >
          {/* Single decorative quotation mark */}
          <span className="guest-review-quote-mark" aria-hidden="true">
            “
          </span>

          <div className="guest-review-top">
            <div>
              <span className="guest-review-score">
                {review.score}
              </span>

              <strong>{review.rating}</strong>
            </div>

            <span className="guest-review-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
          </div>

          {review.title && (
            <h3 className="guest-review-title">
              {review.title}
            </h3>
          )}

          <p className="guest-review-text">
            {review.text}
          </p>
			<br></br>
          <p className="guest-review-liked">
            <strong>Liked:</strong> {review.liked}
          </p>

          <div className="guest-review-footer">
            <div className="guest-review-guest">
              <strong>{review.name}</strong>
              <span>{review.nights}</span>
              <span>{review.travel}</span>
            </div>

            <div className="vrbo-verified">
              <FiCheckCircle />

              <span>
                <strong>VRBO GUEST</strong>
                Verified Guest Review
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="review-slider-controls">
        <div className="review-slider-dots">
          {reviews.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={currentReview === index ? "active" : ""}
              onClick={() => setCurrentReview(index)}
              aria-label={`View review ${index + 1}`}
              aria-current={currentReview === index ? "true" : undefined}
            />
          ))}
        </div>

        <div className="review-slider-arrows">
          <button
            type="button"
            onClick={previousReview}
            aria-label="Previous review"
          >
            <FiChevronLeft />
          </button>

          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}