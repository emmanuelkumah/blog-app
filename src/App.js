import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePost from "./Component/CreatePost";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  //handle input change
  const handleInput = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  //handle form submission
  const handleInputSubmit = (e) => {
    e.preventDefault();

    console.log(input);

    setInput({
      title: "",
      content: "",
    });
  };
  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          path="/createpost"
          element={
            <CreatePost
              input={input}
              handleInput={handleInput}
              handleInputSubmit={handleInputSubmit}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
