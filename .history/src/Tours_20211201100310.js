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
                    <div className="tour-info">
        <h4>{name}</h4>
        <span className="tour-price">{price}</span>
      </div>
                    {/* <div>
                        <h2>{name}</h2>
                        <h2 className="tour-price">{price}</h2>
                        <h4 className=".tour-info">{info}</h4>
                    </div> */}

                </li>
            );    
            })}
           
        </ul>
    );
}

export default Tours


