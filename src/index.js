import React from "react";
import ReactDOM from "react-dom";

const name="Ganesh";
const date=new Date();
const current_year=date.getFullYear();

ReactDOM.render(
  <div>
    <div>
      <h1>My favourite foods</h1>
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    </div>
    <div>
      <h1>creating my name with copyright symbol</h1>
    <p>Created by {name}</p>
    <p>Copyright &copy; {current_year}</p>
    </div>
  </div>,
  document.getElementById("root")
);
