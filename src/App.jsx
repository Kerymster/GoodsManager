import "./App.css";
import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
import Review from "./Components/Review/Review";
import CategoryPanel from "./Components/CategoryPanel/CategoryPanel";
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
          <CategoryPanel />
          <CategoryPanel />
          <CategoryPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
