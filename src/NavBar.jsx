import React from 'react';
import { useEffect } from 'react';








function NavBar({ count, setCount }) {
    
    const handleClickPre = () => {
        setCount(count - 1)
    }
    const handleClickNex = () => {
        setCount(count + 1)
    }

    return (<><button onClick={handleClickPre}>Previous</button>
       <button onClick={handleClickNex}>Next</button>
    </>)

}

export default NavBar;