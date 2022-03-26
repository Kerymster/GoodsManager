//func imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAppAsyncData,
  toggleProduct,
} from "../../Redux/slices/productsSlice";
//style imports
import "./ProductPool.css";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";

const ProductPool = () => {
  // const [isChecked, setIsChecked] = useState(false);

  const items = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppAsyncData());
  }, [dispatch]);

  const handleCheck = (e) => {
    dispatch(toggleProduct(e.target.id));
    console.log(e.target.value);
    console.log(e.target.id);
    // console.log(isChecked);
    // setIsChecked(!e.target.value);
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
              <li key={item.id}>
                <div className="inputGroup">
                  <label className="inputLabel ">
                    <img src={item.image} alt="" className="item-icon" />
                    {item.title}
                  </label>
                  <input
                    className="inputField"
                    type="checkbox"
                    value={item.id}
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
