import { BrowserRouter } from "react-router-dom";
import Header from "../Content/Header";
import "../Styles/App.css";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
