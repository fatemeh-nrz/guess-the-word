import React, { PureComponent } from "react";

class PureCompClass extends PureComponent {
  constructor() {
    super();
    this.state={
        name: "",
        counter :0
    }

  }
   saveNameHandller =()=>{
    let tempName =document.getElementById("myInput").value;
    this.setName=(tempName);
    }
    hideNameHandller =()=>{
       document.getElementById("myInput").value=""; 
    }



  render() {
    return(
        <>
      <div className="container">
        <div className="form-group text-center mt-4  m-y4">
            <h1>پروژه حدس کلمه </h1>
            <input></input>
            <button className="btn btn-success mt-3" onClick={this.saveNameHandller}>ثبت کلمه</button>
            <button className="btn btn-warning mt-3"onClick={this.hideNameHandller}>مخفی کردن پروژه</button>
            <span >{this.counter++}</span>
        </div>
      </div>
    </>
    )
  }
}

export default PureCompClass;
