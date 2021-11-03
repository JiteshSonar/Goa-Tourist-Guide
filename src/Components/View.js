import React from "react";
import { FaFacebook, FaMailBulk, FaSms } from "react-icons/fa";
import "../CSS/View.css";

const View = ({ img, infoone, infotwo, infothree, infofour, title }) => {
  return (
    <div>
      <div
        className="bigImage"
        style={{ width: "100%", height: "600px", textAlign: "center" }}
      >
        <img
          src={img}
          style={{
            width: "100%",
            height: "600px",
          }}
          alt=""
        />
        <h1
          style={{
            float: "top",
            fontFamily: "serif",
            paddingTop: "20px",
            fontWeight: 600,
          }}
        >
          {title}
        </h1>
      </div>

      {/* lower section  */}
      <section id="center">
        <div className="row" style={{ margin: "80px 0" }}>
          <div className="share-btn col-lg-2 sm-12 center">
            <button
              style={{
                borderRadius: "30px",
                height: "50px",
                width: "50px",
                margin: "40px",
              }}
              type="button"
              class="btn btn-primary"
            >
              <FaMailBulk />
            </button>

            <button
              style={{
                borderRadius: "30px",
                height: "50px",
                width: "50px",
                margin: "40px",
              }}
              type="button"
              class="btn btn-primary"
            >
              <FaSms />
            </button>

            <button
              style={{
                borderRadius: "30px",
                height: "50px",
                width: "50px",
                margin: "40px",
              }}
              type="button"
              class="btn btn-primary"
            >
              <FaFacebook />
            </button>
          </div>
          <div className="data col-lg-8 sm-12">
            <h5>{infoone}</h5>
            <h5>{infotwo}</h5>
            <h5>{infothree}</h5>
            <h5>{infofour}</h5>
          </div>
          <div className="col-lg-2 sm-12">
            <></>
          </div>
        </div>
      </section>
    </div>
  );
};

export default View;
