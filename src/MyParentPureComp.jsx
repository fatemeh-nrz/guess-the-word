import React, { Component, Fragment, useState } from "react";
import PureComponent from "react";
import PureCompFunc from "./PureCompFunc";
import PureCompClass from "./PureCompClass";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useRef } from "react";
import { createRef } from "react";
// class MyParentPureComp extends PureComponent{
//     constructor(){
//         super();
//         this.state= {
//             name:"atarod"
//         }
//       myInput = createRef();
//     }
//     render() {
//         return(
//             <>
//             <Fragment>
//                 {/* {console.log("-----------myParent-----------")} */}
//                 <h1 className="text-center mt-4">this is Parent Component</h1>
//                 {/* <PureCompClass/> */}
//                 <PureCompFunc ref={myInput}/>
//             </Fragment>
//             </>
//         )
//     }
// }

const MyParentPureComp = (ref) => {
  const [name, setName] = useState("");
  const myInputref = useRef();
  console.log(myInputref);

const PureComponentInputHandller =()=>{
  myInputref.current.saveNameHandller()
}


  return (
    <Fragment>
      <h1 className="text-danger">In The Name Of God</h1>
      <PureCompFunc ref={myInputref} />
     {/* <button onClick={PureComponentInputHandller}>Test</button> */}
    </Fragment>
  );
};

export default MyParentPureComp;
