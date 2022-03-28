//func imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleProduct,
  checkedProducts,
  unCheckedProducts,
} from "../../Redux/slices/productsSlice";
import SingleProduct from "../SingleProduct/SingleProduct";
//style imports
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const ProductPool = () => {
  const items = useSelector((state) => state.productsSlice.products);
  const checkedList = items.filter((item) => item.checked === true);
  const unCheckedList = items.filter((item) => item.checked === false);
  // console.log(unCheckedList);
  // console.log(checkedList);
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    dispatch(toggleProduct(e.target.id));
  };

  useEffect(() => {
    dispatch(checkedProducts(checkedList));
    dispatch(unCheckedProducts(unCheckedList));
  }, [checkedList, unCheckedList]);

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
              <SingleProduct
                key={item.id}
                item={item}
                handleCheck={handleCheck}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPool;
