import React from 'react'
import { useLocation } from 'react-router-dom';

const Finish = ()=>{
    const location = useLocation()
    const fulldetails = location.state ?. fulldetails;
    console.log(fulldetails)
    return(<div>
        Hello 
    </div>)
}

export default Finish