<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import End from "./End";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [value, setValue] = useState([]);
  const [showMore, setshowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const request = await fetch(url);
    const resp = await request.json();
    setValue(resp);
  };

  useEffect(() => {
    fetchUser();

    setTimeout(() => setLoading(false), 2000);

  }, []);

  const deleteTour = (id) => {
    if (value !== null) {
      setValue(value.filter((value) => value.id !== id));
    }
  };

  if (loading) return <Loading />;

  if (value == 0) return <End/>;

  return (
      <div className="container">
          <h1 className="title"> Our Tours <hr className="underline" /> </h1>
          <ul className="sites">
            { value !== null && value.map ((value) => {
             const{id, name, info,image, price} = value;
       return(               
               <li key ={id} className='single-tour'>
                    <img src={image} alt={name}/>
                    <div className="description">
                      <h4>{name} <span className="price">${price}</span></h4>
                      <p>
                        {!showMore ? `${info.slice(0, 200)} ...` : info}
                         <button className="btn" onClick={() => setshowMore(!showMore)}>
                           {showMore ? "Show Less." : "Show More"}
                          </button>
                      </p>
                      <button className='button' onClick={() => deleteTour(id)}>Not Interested</button>
                      <footer/>
                     </div>
                    
              </li>
       );
      })}
           </ul>
      </div>
    
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import url from "./url"


function Tours() {
    const [users, setUsers] = useState([]);
    const [showMore, setshowMore] = useState(false);
    const deleteTour = (id) => {
        if (users !== null) {
          setUsers(users.filter((user) => user.id !== id));
        }
      };

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
                        <p className="tour-info">
                        {!showMore ? `${info.slice(0, 200)} ...` : info}
                        <button className="btn" onClick={() => setshowMore(!showMore)}>
                        {showMore ? "Show Less." : "Show More"}
                        </button>
                        </p>
                        </div>
                        <footer>
                        <button className="delete-btn" onClick={() => deleteTour(user.id)}>
                        Not Interested
                        </button>
                        </footer>
                    </div>

                </li>
            );    
            })}
           
        </ul>
    );
}

export default Tours


=======
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
>>>>>>> 65b16def2b056b145fa5e706088469e0229fcb4c
  );
};

export default Tours;
<<<<<<< HEAD
=======
>>>>>>> 509f1047db51c12fc3a9eaa763d9f9da1d52e434
>>>>>>> 65b16def2b056b145fa5e706088469e0229fcb4c
