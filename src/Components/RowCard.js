import React from "react";
import "../CSS/RowCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RowCard = ({ name, heading_line, info, image, rating, location }) => {
  return (
    <div className="containerBx">
      <div class="imageBX">
        <img class="images" src={image} alt="04" />
      </div>
      <div class="detailsBX">
        <h2>{name}</h2>
        <h6>{heading_line}</h6>
        <p>{info}</p>
        <p>
          {
            <div className="rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
              <p
                style={{
                  marginLeft: "100px",
                }}
              >
                {location}
              </p>
            </div>
          }
        </p>
      </div>
    </div>
  );
};

export default RowCard;
