import React from "react";
import ReactStars from "react-stars";

const ReviewStars = () => {
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default ReviewStars;
