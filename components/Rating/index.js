// components/Rating.js

import Star from "../Star";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
