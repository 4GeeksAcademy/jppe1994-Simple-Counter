//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/secondscounter.jsx";

setInterval(secondsCount, 1000,);

let contador = 0
function secondsCount() {
  // Your code here
  contador = contador + 1
  // Parameters are purely optional.
  
  ReactDOM.render(<SecondsCounter seconds={contador} />, document.querySelector("#app"));
  
}

//render your react application

