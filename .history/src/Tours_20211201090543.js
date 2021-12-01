import React, { useState, useEffect } from 'react'
import url from "./url"


function Tours() {
    //const [users, setUsers] = useState([]);
const [showMore, setshowMore] = useState(false);
const [ tour ] = useState(true);
const [tours, setTours] = useState(null);

    const fetchTours = async () => {
        const request = await fetch(url);
        const resp = await request.json();
        setTours(resp);
    };

const deleteTour = (id) => {
    if (tours !== null) {
      setTours(tours.filter((tour) => tour.id !== id));
    }
  };

    useEffect(() => {
        fetchTours();
    }, []);
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
}

export default Tours


