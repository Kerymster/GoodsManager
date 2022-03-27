import { getAppAsyncData } from "./Redux/slices/productsSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//style imports
import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
import Review from "./Components/Review/Review";
import CategoryPanel from "./Components/CategoryPanel/CategoryPanel";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAppAsyncData());
  }, []);
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
        </div>
      </div>
    </div>
  );
}

export default App;
