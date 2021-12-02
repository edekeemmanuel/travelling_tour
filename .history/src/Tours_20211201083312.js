// import React, { useState, useEffect } from 'react'
// import url from "./url"


// function Tours() {
//     const [users, setUsers] = useState([]);

//     const fetchUser = async () => {
//         const request = await fetch(url);
//         const resp = await request.json();
//         setUsers(resp);
//     };

//     useEffect(() => {
//         fetchUser();
//     }, []);
//     return (
//         <ul className="single-tour">
//             {users.map((user) => {
//                 const { id, name, info, image, price } = user;
//                 <h1 className="title">Our Tour</h1>
//                return (
//                 <li key={id}>
//                     <img src={image} alt={name} />
//                     <div>
//                         <h2>{name}</h2>
//                         <h2 className="tour-price">{price}</h2>
//                         <h4 className=".tour-info">{info}</h4>
//                     </div>

//                 </li>
//             );    
//             })}
           
//         </ul>
//     );
// }

// export default Tours


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