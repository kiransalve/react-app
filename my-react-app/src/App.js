import Home from "./component/Home/Home";
import Context from "./store/Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Home />
      </div>
    </Context>
  );
}

export default App;
