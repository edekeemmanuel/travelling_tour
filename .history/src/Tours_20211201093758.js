import React, { useState, useEffect } from 'react'
import url from "./url"


function Tours() {
    const [users, setUsers] = useState([]);

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
                <h2 className="title">
                Our Tours
                <hr className="underline" />
                </h2>
               return (
                <li key={id}>
                    <img src={image} alt={name} />
                    <div>
                        <h2>{name}</h2>
                        <h2 className="tour-price">{price}</h2>
                        <h4 className=".tour-info">{info}</h4>
                    </div>

                </li>
            );    
            })}
           
        </ul>
    );
}

export default Tours


