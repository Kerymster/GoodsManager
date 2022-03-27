//style imports
import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
import Review from "./Components/Review/Review";
import CategoryPanel from "./Components/CategoryPanel/CategoryPanel";
import "./App.css";

function App() {
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
          <button className="cat-add-btn">ADD NEW CATEGORY</button>
        </div>
      </div>
    </div>
  );
}

export default App;
