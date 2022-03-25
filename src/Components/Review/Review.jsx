import React from "react";
import "./Review.css";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
const Review = () => {
  return (
    <div className="review">
      <div className="title">
        <div>
          <VisibilityOutlinedIcon className="title-icon" />
        </div>
        <div className="title-text">
          <h2>Review</h2>
        </div>
      </div>
      <hr />
      <div className="card">
        <ul>
          <li>
            <div className="inputGroup">
              <label className="inputLabel">Item</label>
              <input className="inputField" type="checkbox" />
            </div>
          </li>
          <li>
            <div className="inputGroup">
              <label className="inputLabel">Item</label>
              <input className="inputField" type="checkbox" />
            </div>
          </li>
          <li>
            <div className="inputGroup">
              <label className="inputLabel">Item</label>
              <input className="inputField" type="checkbox" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
