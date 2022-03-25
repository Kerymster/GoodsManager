import "./App.css";
import Topbar from "./Components/Navigation/Topbar";
import ProductPool from "./Components/ProductPool/ProductPool";
function App() {
  return (
    <div className="App">
      <div className="top">
        <Topbar />
      </div>
      <div className="mid">
        <div className="left">
          <ProductPool />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
