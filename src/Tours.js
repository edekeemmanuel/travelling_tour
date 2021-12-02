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
  )
    }

    export default Tours;
