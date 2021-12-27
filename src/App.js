import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreatePost from "./Component/CreatePost";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { auth, db } from "./FirebaseConfig";
import Blog from "./Component/Blog";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [input, setInput] = useState({
    title: "",
    content: "",
    date: "",
    category: "",
  });
  const [postLists, setPostLists] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  //create new Post
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      ...input,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    setIsPublished(true);
  };

  //get access to Post
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);

      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  }, []);

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
    //add post
    createPost();

    setInput({
      title: "",
      content: "",
      category: "",
      date: "",
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
              isPublished={isPublished}
              isAuth={isAuth}
            />
          }
        />
        <Route path="/blog" element={<Blog postLists={postLists} />} />
      </Routes>
    </Router>
  );
}

export default App;
