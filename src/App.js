import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./Component/CreatePost";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
