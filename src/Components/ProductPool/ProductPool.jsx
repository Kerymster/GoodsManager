//func imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAppAsyncData,
  toggleProduct,
} from "../../Redux/slices/productsSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
//style imports
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const ProductPool = () => {
  const items = useSelector((state) => state.productsSlice.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppAsyncData());
  }, [dispatch]);

  const handleCheck = (e) => {
    dispatch(toggleProduct(e.target.id));
  };

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
              <SingleProduct item={item} handleCheck={handleCheck} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPool;
