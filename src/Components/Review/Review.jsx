import React from "react";
import "./Review.css";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
const Review = () => {
  let count = 1;
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
        <div className="pool-count">
          <LocalMallOutlinedIcon className="pc-icon" />
          <p className="pc-text">Available Goods :</p>
        </div>
        <div className="categories">
          <BookOutlinedIcon className="pc-icon" />
          <p className="pc-text">Categories :</p>
        </div>
        <ul>
          <li>
            <div className="category">
              <ArrowForwardRoundedIcon className="cat-icon" />
              <p className="cat-label">
                Category 1 : <span className="cat-span">{count} items</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
