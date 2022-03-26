//func imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppAsyncData } from "../../Redux/slices/productsSlice";
//style imports
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const ProductPool = () => {
  const [checked, setChecked] = useState(false);
  const [poolItems, setPoolItems] = useState([]);
  const items = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppAsyncData());
  }, [dispatch]);

  const handleCheck = (e) => {};

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
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <div className="inputGroup">
                  <label htmlFor={item.id} className="inputLabel ">
                    <img src={item.image} alt="" className="item-icon" />
                    {item.title}
                  </label>
                  <input
                    className="inputField"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={handleCheck}
                    id={item.id}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPool;
