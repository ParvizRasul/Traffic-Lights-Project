import React, { useState } from "react";

function Trafficlight() {

  
  
  const [color, setColor] = useState("yellow");




  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="holder bg-dark"></div>

      <div className="lights d-flex flex-column justify-content-around align-items-center bg-dark">
        <div className="light">
          <button className={`btn btn-danger ${color==="red" ? "highlight" : ""} `} onClick={() => setColor('red')}></button>
        </div>

        <div className="light">
          <button className={`btn btn-warning ${color==="yellow" ? "highlight" : ""}`} onClick={() => setColor('yellow')} ></button>
        </div>

        <div className="light">
          <button className={`btn btn-success ${color==="green" ? "highlight" : ""}`} onClick={()=>{setColor("green")}}></button>
        </div>

      </div>
    </div>
  );
}

export default Trafficlight;
