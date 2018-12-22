import React from "react";

export const Card = (props) => (
  <div className="card">
    <div className="card-body">
      {props.children}
      {/* <p>
        {props.name}
      </p>
      <p>
        {props.number}
      </p>
      <p>
        {props.expiration}
      </p>
      <p>
        {props.cvv}
      </p> */}
    </div>
  </div>
);
