import React from "react";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../Redux/slices/categorySlice";
const CategoryCard = ({ selectedItems, title, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="cat-card">
      <div className="top">
        <div className="title">
          <div>
            <BookOutlinedIcon className="title-icon" />
          </div>
          <div className="title-text">{title}</div>
        </div>
      </div>
      <div className="mid-sec">
        {selectedItems && selectedItems.length === 0 ? (
          <div className="defaultCard">
            <AddCircleOutlineRoundedIcon className="plus-icon" />
            <p>Select Your Goods To Manage Them!</p>
          </div>
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
          <button
            className="remove-cat"
            id={id}
            onClick={(e) => dispatch(removeCategory(e.target.id))}
          >
            Remove Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
