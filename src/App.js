<<<<<<< HEAD
import Loading from './Loading';
import Tours from './Tours';
import './index.css';



function App() {
  return (
    <>
    <Loading />
    <Tours />
    </>
  );  
}

export default App;

// import React, { useEffect, useState } from "react";
// import Loading from "./Loading";
// import Tours from "./Tours";
// import "./index.css";

// const url = "https://course-api.com/react-tours-project";

// function App() {
//   const [tours, setTours] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw res;
//       })
//       .then((tours) => {
//         setTours(tours);
//       })
//       .catch((err) => {
//         console.error("Error: ", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   const deleteTour = (id) => {
//     if (tours !== null) {
//       setTours(tours.filter((tour) => tour.id !== id));
//     }
//   };

//   if (loading) return <Loading />;
//   return (
//     <div className="section">
//       <h2 className="title">
//         Our Tours
//         <hr className="underline" />
//       </h2>

//       {tours !== null &&
//         tours.map((tour) => (
//           <Tours key={tour.id} tour={tour} deleteTour={deleteTour} />
//         ))}
//     </div>
//   );
// }

// export default App;
=======
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((tours) => {
        setTours(tours);
      })
      .catch((err) => {
        console.error("Error: ", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteTour = (id) => {
    if (tours !== null) {
      setTours(tours.filter((tour) => tour.id !== id));
    }
  };

  if (loading) return <Loading />;
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

export default App;
>>>>>>> 509f1047db51c12fc3a9eaa763d9f9da1d52e434
