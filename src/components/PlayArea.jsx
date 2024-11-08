
import { useState, useEffect } from "react";
import { UserInput } from './UserInput'

const listOfWords = [
    "hello",
    "world",
    "react",
    "javascript",
    "programming",
    "computer",
    "science",
    "mathematics",
    "physics",
    "chemistry",
    "biology",
    "english",
    "history",
    "geography",
    "economics",
    "music",
    "art",
    "design",
    "engineering",
    "medicine",
    "business",
    "management",
    "marketing",
    "finance",
    "accounting",
    "statistics",
    "psychology",
    "sociology",
    "anthropology",
    "philosophy",
    "religion",
    "politics",
    "law",
    "education",
    "literature",
    "linguistics",
    "communication",
    "journalism",
    "film",
    "theatre",
    "dance",
    "sports",
    "nutrition",
    "health",
    "wellness",
    "fitness",
    "yoga",
    "meditation",
    "mindfulness",
    "spirituality",
    "environment",
    "sustainability",
    "climate",
    "change",
    "global",
    "warming",
    "technology",
    "innovation",
    "creativity",
    "entrepreneurship",
    "leadership",
    "management",
    "strategy",
    "operations",
    "supply",
    "chain",

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
