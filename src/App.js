import React, { useState } from "react";
import "./styles.css";
var animalDictionary = {
  "🐵": "Monkey",
  "🦍": "Gorilla",
  "🦄": "Unicorn",
  "🦓": "Zebra",
  "🐱": "Cat",
  "🐶": "Dog"
};

var emojisWeKnow = Object.keys(animalDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");
  function inputChangeHandler(event) {
    var userinput = event.target.value;
    var meaning = animalDictionary[userinput];
    if (meaning === undefined) {
      meaning = "This does not exist in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = animalDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ fontStyle: "oblique" }}>Animal Emojis!!!</h1>
      <input onChange={inputChangeHandler}></input>
      <h2> {meaning} </h2>
      <h3 style={{ fontStyle: "oblique" }}> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
