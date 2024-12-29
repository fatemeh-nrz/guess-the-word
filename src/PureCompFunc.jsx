import React, { createRef, useEffect, useRef, useState } from "react";
import PureComponent from "react";
import { forwardRef } from "react";


let counter = 0;
const PureCompFunc = (ref, props )=>{
  const [name, setName] = useState("");
  const myInput = useRef();
  // const myInput = myInputref;
  

  const saveNameHandller = () => {
    let tempName =myInput.current.value;
  setName(tempName);
  };
  const hideNameHandller = () => {
   myInput.current.value = " ";
  };

// console.log(myInput.current)

  return (
    <>
    
      <div className="container">
        <div className="control-fa-group text-center mt-4  m-y4">
          <h2 className="text-warning">پروژه حدس کلمه </h2>
          <input ref={myInput} ></input>
        
          <br></br>
          <button className="btn btn-success mt-3 " onClick={saveNameHandller}>
            ثبت کلمه
          </button>
          <button className="btn btn-warning mt-3" onClick={hideNameHandller}>
            مخفی کردن{" "}
          </button>
          <br></br>
          <span>{counter++}</span>
        </div>
      </div>
    </>
  );
};

export default forwardRef(PureCompFunc);
// export default PureCompFunc;
