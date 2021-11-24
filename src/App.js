import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./Components/Home";
import Rejected from "./Components/Rejected";
import ShortListed from "./Components/ShortListed";
import ProfileInfo from "./Components/ProfileInfo";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/shortlisted" element={<ShortListed />} />
          <Route path="/profile/:id" element={<ProfileInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
