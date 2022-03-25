import React from "react";
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
const ProductPool = () => {
  return (
    <div className="pool">
      <div className="title">
        <div>
          <StorefrontRoundedIcon className="title-icon" />
        </div>
        <div className="title-text">
          <h2>Product Pool</h2>
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

export default ProductPool;
