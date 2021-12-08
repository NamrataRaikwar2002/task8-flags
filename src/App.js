import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "🇮🇳 ": "India",
  " 🇧🇹": "Bhutan",
  "🇧🇻 ": "Bouvet Island",
  "🇧🇼 ": " Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿 ": "Belize",
  "🇨🇦 ": "Canada"
};

var emojiKnow = Object.keys(emojipedia);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojipedia[userInput];

    if (meaning === undefined) {
      meaning = "We don't  have this in our database ";
    }
    setMeaning(meaning);
  }
  function emojiclick(emoji) {
    console.log(emoji);
    var meaning = emojipedia[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>let's know flags</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> flags we know</h3>
      {emojiKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclick(emoji)}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
