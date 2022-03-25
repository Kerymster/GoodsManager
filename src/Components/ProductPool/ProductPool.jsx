import React from "react";
import "./ProductPool.css";
const ProductPool = () => {
  return (
    <div className="pool">
      <h2 className="title">Product Pool</h2>
      <hr />
      <div className="card">
        <ul>
          <li>
            <div className="inputGroup">
              <label>Item</label>
              <input type="checkbox" />
            </div>
          </li>
          <li>
            <div className="inputGroup">
              <label>Item</label>
              <input type="checkbox" />
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
