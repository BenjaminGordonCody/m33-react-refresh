//imports
import "./App.css";
import { useState } from "react";
import { ListItem } from "./components/ListItem";
import { PostCreator } from "./components/PostCreator";

function App() {
  // states
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setPostContent] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent) {
      setList([...list, postContent]);
    }
  };
  return (
    <div className="App">
      {user ? <h1>Welcome {user}.</h1> : <h1>Please log-in.</h1>}
      <input onChange={(e) => setUser(e.target.value)}></input>
      <PostCreator
        setPostContent={setPostContent}
        submitHandler={submitHandler}
      />
      <div>
        {list.map((item, index) => (
          <ListItem string={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
