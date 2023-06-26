import React from 'react'
import { useState } from 'react';

const Update = () => {
    const [myObject, setMyObject] = useState({
        myName:"Sriyan", 
        myAge:20, 
        myDegree:"B.Tech"
    });


    const changeObject = () => {
        setMyObject({...myObject, myName:"Rahul Tesu", myAge:24, myDegree:"Fail"});
    }
  return (
    <>
     {/* start */}
            
     <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>   {/*for margin top full page */}
            <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>

            {/* end  */}
    <div className='text-center m-4 p-3'>
        <h1>Name: {myObject.myName}</h1>
        <h2>Age: {myObject.myAge}</h2>
        <h3>Degree: {myObject.myDegree}</h3>
        <button className='fs-3 mt-5' onClick={changeObject}>Update</button>
    </div>
    </>
  )
}

export default Update
