//func imports
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setState } from "./Redux/slices/productsSlice";
import axios from "axios";
//style imports
import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
import Review from "./Components/Review/Review";
import CategoryPanel from "./Components/CategoryPanel/CategoryPanel";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   await axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => dispatch(setState(res.data)))
  //     .catch((err) => console.log("Error", err));
  // };

  return (
    <div className="App">
      <div className="top">
        <Topbar />
      </div>
      <div className="mid">
        <div className="left">
          <ProductPool />
          <Review />
        </div>
        <div className="right">
          <CategoryPanel />
          <CategoryPanel />
          <CategoryPanel />
          <CategoryPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
