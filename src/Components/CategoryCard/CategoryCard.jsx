import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../../Redux/slices/categorySlice";
import { setProducts } from "../../Redux/slices/productsSlice";
import { setProductsRemainingList } from "../../Redux/slices/productsSlice";
const CategoryCard = ({ selectedItems, title, id }) => {
  const checkedProducts = useSelector(
    (state) => state.productsSlice.checkedList
  );
  const categorizedList = useSelector(
    (state) => state.productsSlice.categorizedList
  );
  const dispatch = useDispatch();

  const addItem = (e) => {
    dispatch(setProducts(e.target.id));
    dispatch(setProductsRemainingList());
    console.log(selectedItems);
  };
  console.log("categorizedList", categorizedList, id);

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
        {categorizedList.length === 0 ? (
          <div className="defaultCard">
            <AddCircleOutlineRoundedIcon className="plus-icon" />
            <p>Select Your Goods To Manage Them!</p>
          </div>
        ) : (
          <div className="card">
            <ul>
              {categorizedList.map(
                (item) =>
                  item.categorized.id == id && (
                    <li key={item.id}>
                      <div className="inputGroup">
                        <label className="inputLabel">{item.title}</label>
                        <input className="inputField" type="checkbox" />
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="prd-btns">
          <button
            disabled={checkedProducts.length > 0 ? false : true}
            className="add-prd"
            id={id}
            onClick={addItem}
          >
            Add # Product(s)
          </button>
          <button
            className="remove-prd"
            disabled={checkedProducts.length > 0 ? true : false}
          >
            Remove Product
          </button>
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
