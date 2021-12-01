import React, { useState } from "react";

const Tours = ({ tour, deleteTour }) => {
  const [showMore, setshowMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={tour.image} alt="" />

      <div className="tour-info">
        <h4>{tour.name}</h4>
        <span className="tour-price">{tour.price}</span>
      </div>
      <div>
        <p>
          {!showMore ? `${tour.info.slice(0, 200)} ...` : tour.info}
          <button className="btn" onClick={() => setshowMore(!showMore)}>
            {showMore ? "Show Less." : "Show More"}
          </button>
        </p>
      </div>
      <footer>
        <button className="delete-btn" onClick={() => deleteTour(tour.id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tours;
