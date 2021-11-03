import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../CSS/Gallery.css";
import agonabeach from "../cardImage/agonabeach.jpg";

const Gallery = () => {
  return (
    <div className="galary">
      <Router>
        <div className="galery__imagegroup">
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
          <div className="gallery__image">
            <Link to="">
              <img className="image" src={agonabeach} alt="" />
            </Link>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Gallery;
