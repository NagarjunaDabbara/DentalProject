import "./App.css";
import Nav from "./components/Navbar";
import Upload from "./pages/upload/upload";
import Dropdown from "./pages/Dropdown";
import Location from "./pages/location";
import { Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div class="min-h-screen flex flex-row bg-gray-100">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dropdown
            
            />
          </Route>
          <Route path="/upload">
            <Upload/>
          </Route>
          <Route path="/location">
            <Location/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
