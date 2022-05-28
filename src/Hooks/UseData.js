import React, { useEffect, useState } from 'react';

const UseData = () => {
    const[projects,setProject]=useState([])
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return [projects]
};

export default UseData;