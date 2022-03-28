import React from "react";
import "./Review.css";
import { useSelector } from "react-redux";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
const Review = () => {
  const categories = useSelector((state) => state.categorySlice.categories);
  const products = useSelector((state) => state.productsSlice.products);
  const categorizedList = useSelector(
    (state) => state.productsSlice.categorizedList
  );
  console.log("categorizedList", categorizedList);

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
          <p className="pc-text">Available Goods : {products.length}</p>
        </div>
        <div className="categories">
          <BookOutlinedIcon className="pc-icon" />
          <p className="pc-text">Categories : {categories.length}</p>
        </div>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <div className="category">
                <ArrowForwardRoundedIcon className="cat-icon" />
                <p className="cat-label">
                  {category.title} :
                  <span className="cat-span">{category.id} items</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
