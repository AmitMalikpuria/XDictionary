import React, { useState } from "react";

function App() {

  const DictionaryData = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }
  ]


  const [word, setWord] = useState('');
  const [explanation, setExplanation] = useState('');

  const searchWord = () => {
    const getMeaning = DictionaryData.find((item) => item.word.toLocaleLowerCase() == word.toLocaleLowerCase());
    console.log("Meaning", getMeaning);
    if (getMeaning) {
      setExplanation(getMeaning.meaning)
    } else {
      setExplanation('Word not found in the dictionary.');
    }
  }

  return (
    <div >
      <h1>Dictionary App</h1>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Search for a word..."></input>
      <button onClick={() => searchWord()}>Search</button>
      <h4>Definition:</h4>
      <p>{explanation}</p>
    </div>
  );
}

export default App;
