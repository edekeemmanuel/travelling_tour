import React, { useState, useEffect } from "react";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [value, setValue] = useState([]);
  const [showMore, setshowMore] = useState(false);

  const fetchUser = async () => {
    const request = await fetch(url);
    const resp = await request.json();
    setValue(resp);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
      <div className="container">
          <h1 className="title"> Our Tours <hr className="underline" /> </h1>
          <ul className="sites">
            {value.map ((value) => {
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
                      <button className='button'>Not Interested</button>
                      <footer/>
                     </div>
                    
              </li>
       );
      })}
           </ul>
      </div>
    
  );
};

export default Tours;
