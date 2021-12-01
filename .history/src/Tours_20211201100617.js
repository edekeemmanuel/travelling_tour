import React, { useState, useEffect } from 'react'
import url from "./url"


function Tours() {
    const [users, setUsers] = useState([]);
    const [showMore, setshowMore] = useState(false);

    const fetchUser = async () => {
        const request = await fetch(url);
        const resp = await request.json();
        setUsers(resp);
    };

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <ul className="single-tour">
            {users.map((user) => {
                const { id, name, info, image, price } = user;
               return (
                <li key={id}>
                    <img src={image} alt={name} />
     
                    <div>
                        <div className="tour-info">
                        <h4>{name}</h4>
                        <span className="tour-price">{price}</span>
                        </div>
                        <div>
        <p>
          {!showMore ? `${info.slice(0, 200)} ...` : info}
          <button className="btn" onClick={() => setshowMore(!showMore)}>
            {showMore ? "Show Less." : "Show More"}
          </button>
        </p>
      </div>
                    </div>

                </li>
            );    
            })}
           
        </ul>
    );
}

export default Tours


