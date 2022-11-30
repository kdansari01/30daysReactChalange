import { useState } from "react";
import "./styles.css";
import Popup from "react-animated-popup";
import search from "./component/reactExercise";

export default function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [show, setshow] = useState("");

  const inputHandler = (e) => {
    setshow(e.target.value);
  };

  const submit = () => {
    localStorage.setItem("list", show);
  };

  const isShow = (e) => {
    setshow(e.target.value);
  };
  const togleButton = () => {
    if (!isTrue) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  return (
    <>
      <div className="App">
        <button onClick={togleButton}>Show</button>
        <Popup visible={isTrue} onClose={togleButton}>
          {isTrue ? `Start editing to see some magic happen!` : null}
        </Popup>
      </div>

      {users.map((ele) => (
        <h3 key={ele.id}>{ele.name}</h3>
      ))}

      <input type="text" placeholder="Enter Text" onChange={isShow} />
      {/* <p>{show}</p> */}

      <input type="text" onChange={inputHandler} />
      <button disabled={show.length <= 1} onClick={submit}>
        Submit
      </button>

      {/* <div className="card"></div> */}

      <div>
        <search />
      </div>
    </>
  );
}
