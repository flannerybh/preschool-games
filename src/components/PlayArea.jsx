
import { useState, useEffect } from "react";
import { UserInput } from './UserInput'

const listOfWords = [
     "owl",
    "cat",
    "dog",
    "lion",
    "tiger",
    "bear",
    "wolf",
    "fox",
    "whale",
    "shark",
    "eagle",
    "hawk",
    "game",
    "fish",
    "deer",
    "duck",
    "goose",
    "horse",
    "zebra",

]
function App() {
  let [word, setWord] = useState("hello");
  let [score, setScore] = useState(0);

  let [userInput, setUserInput] = useState(" ");

  const handleKeyPress = (event) => {
    let k = event.key;
    if(k === "Backspace") {
       setUserInput((prev) => prev.slice(0, -1));
      return;
    }else if(k < 'z' & k >= 'a') {
        setUserInput((prev) => prev + event.key);
    }

  };

  useEffect(() => {
    if (userInput.trim() === word) {
      setScore((prev) => prev + 1);
      setUserInput(" ");
      setWord(listOfWords[Math.floor(Math.random() * listOfWords.length)]);
    }
  }, [userInput, word]);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div>
      <h1 style={{"letter-spacing": ".2rem"}}>{word}</h1>

      <h2><UserInput input={userInput} goal={word} /></h2>

      <div>{score}</div>
    </div>
  );
}

export default App;
