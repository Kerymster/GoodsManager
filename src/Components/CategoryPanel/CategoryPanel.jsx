import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CategoryPanel.css";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";

const CategoryPanel = () => {
  let item = true;
  // const poolProducts = useSelector((state) => state.productsSlice.products);
  // console.log(poolProducts);
  // const [item, setItem] = useState(false);

  // const setCategory = () => {
  //   poolProducts.find((prd) =>
  //     prd.checked === true ? setItem(true) : setItem(false)
  //   );
  // };
  // useEffect(() => {
  //   setCategory();
  // }, [poolProducts]);
  // console.log(item);

  // poolProducts.find((prd) => prd.checked);
  // console.log(poolProducts);
  // console.log(item);

  return (
    <div className="cat-card">
      <div className="top">
        <div className="title">
          <div>
            <BookOutlinedIcon className="title-icon" />
          </div>
          <div className="title-text">Category 1</div>
        </div>
      </div>
      <div className="mid-sec">
        {!item ? (
          <>
            <AddCircleOutlineRoundedIcon className="plus-icon" />
            <p>Select Your Goods To Manage Them!</p>
          </>
        ) : (
          <div className="card">
            <ul>
              <li>
                <div className="inputGroup">
                  <label className="inputLabel">Item</label>
                  <input className="inputField" type="checkbox" />
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="prd-btns">
          <button className="add-prd">Add # Product(s)</button>
          <button className="remove-prd">Remove Product</button>
        </div>
        <div className="prd-btns">
          <button className="remove-cat">Remove Category</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPanel;
