import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../CSS/Card.css";

const MyCard = ({ id, image, title, tag }) => {
  return (
    <div className="container">
      <div className="card">
        <tr>
          <td>
            <div className="imgBx">
              <img className="img" src={image} alt="Shape" />
            </div>
          </td>
          <td>
            <div className="contentBx">
              <h2>{title}</h2>
              <p>{tag}</p>
            </div>
          </td>
        </tr>
      </div>
    </div>
  );
};
export default MyCard;
