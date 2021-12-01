import React, {useState, useEffect} from 'react';
import url from "./url"


function Loading()  {
    const {titles} = useState(true);
    const {load, setLoad} = useState(true);
    const {isError, setIsError} = useState(false);
    const {user, setUser} = useState("default users");

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
            setUser(login);
            setLoad(false);

        })
        .catch((err) => {
            console.log(err);
        })
    })

     const deleteUser = (id) => {
    if (user !== null) {
      setUser(user.filter((user) => user.id !== id));
    }
  };

  if (load) return <Loading />;
  return (
    <div className="section">
      <h2 className="title">
        Our Tours
        <hr className="underline" />
      </h2>

      {user !== null && user.map((user) => (
          <user key={user.id} user={user} deleteUser={deleteUser} />
        ))}
    </div>
  ); 

//     if (load) {
//         return (
            
//             <div className="loading">
                
//                 <h1>Loading...</h1>
//                 <h2 className="title">
//                 Our Tours
//                 <hr className="underline" />
//                 </h2>
//             </div>
//         )
//     } else if (isError) {
//         return (
//             <div>
//                 <h1>Error details, cross check again...</h1>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h1>{user}</h1>
//             </div>
//         ) 
// }
}

export default Loading
