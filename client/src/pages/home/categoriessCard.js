import React from "react";

export default function CategoriessCard() {
  return (
    <div className="container">
      <div className="row">
        <Card title="new" title2="with" name="headPhone" />
        <Card title="new" title2="with" name="headPhone" />
      </div>
      
      <div className="row">
        <Card title="new" title2="with" name="headPhone" />
        <Card title="new" title2="with" name="headPhone" />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-6 row">
      <div className="leftCard col-6">
        <div className="firstTitle">{props.title}</div>
        <div className="secondTitle">{props.title2}</div>
        <div className="CategorieName">{props.name}</div>
      </div>
      <div className="rightCard col-6">
        <img src="#" alt="img" />
      </div>
    </div>
  );
}
