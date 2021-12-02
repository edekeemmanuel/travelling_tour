import React from 'react';
import "./index.css";


const End = () => {
    return (
        <div className='end'>
            <h3>
            No More Tours Remaining
        </h3>

        <button className="btn" onClick={() => window.location.reload(false)}>Refresh</button>
        </div>
        
    )
}

export default End
