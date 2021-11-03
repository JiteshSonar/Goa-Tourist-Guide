import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {} from "react-icons";
import "../CSS/Navbar.css";

const Navbars = () => {
  return (
    <div>
      <div className="search-box">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/">
              <p
                className="navbar-brand"
                style={{
                  fontWeight: 600,
                  fontSize: "2rem",
                  marginLeft: "20px",
                }}
              >
                GOA
              </p>
            </Link>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbars;
