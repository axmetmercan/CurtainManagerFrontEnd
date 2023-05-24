import React from "react";

export default function TextCard(props) {
  return (
    <div className="card shadow" style={{ width: props.width }}>
      <div className="card-body">
        <h1 className="card-title" style={{ textAlign: "center" }}>
          Hakkımızda
        </h1>
        <hr></hr>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </p>
      </div>
    </div>
  );
}
