import React from "react";

// Generic bootstrap card
export const Card = (props) => (
  <div className="card">
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
