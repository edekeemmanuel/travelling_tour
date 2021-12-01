import React, {useState, useEffect} from 'react';
import url from "./url"
import Tours from './Tours';


function Loading()  {
    const {titles} = useState(true);
    const {load, setLoad} = useState(true);
    const { setIsError} = useState(false);
    //const {user, setUser} = useState("default users");
    //const [ tour ] = useState(true);
const [tours, setTours] = useState(null);

    useEffect(()=>{
        document.title = `Tour (${titles})`

        fetch (url)
        .then((resp) => {
            if (resp.status >= 200 && resp.status <= 299) {
                return resp.json();
            } else {
                setIsError(true);
                setLoad(false);
                throw new Error(resp.statusText);
            }
        })
        .then((data) => {
            const { login } = data;
            setTours(login);
            setLoad(false);

        })
        .catch((err) => {
            console.log(err);
        })
    })

    
const deleteTour = (id) => {
    if (tours !== null) {
      setTours(tours.filter((tour) => tour.id !== id));
    }
  };

      if (load) return <Loading />;
  return (
    <div className="section">
      <h2 className="title">
        Our Tours
        <hr className="underline" />
      </h2>

      {tours !== null &&
        tours.map((tour) => (
          <Tours key={tour.id} tour={tour} deleteTour={deleteTour} />
        ))}
    </div>
  );
}




export default Loading
