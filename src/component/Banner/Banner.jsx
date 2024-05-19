import React from "react";
import "./banner.css";
import Button from "@mui/material/Button";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = () => {
  return (
    <>
      <div className="banDiv">
        <div className="banDiv2">
          <div className="searchBox">
            <span>
              <input
                type="text"
                placeholder="Type you image name..."
                className="inp"
              />
            </span>

            <span>
              <Button variant="contained" color="success">
                Search
              </Button>
            </span>
          </div>

          <div className="trending_search">
            <button> <FontAwesomeIcon icon={faSearch} style={{width:'15px'}}/>9_face_toon </button>
            <button> <FontAwesomeIcon icon={faSearch} style={{width:'15px'}}/>9_face_toon </button>
            <button> <FontAwesomeIcon icon={faSearch} style={{width:'15px'}}/>9_face_toon </button>
          </div>
        </div>
      </div>


      
{/* <Grid container spacing={12}> */}

    </>
  );
};

export default Banner;
