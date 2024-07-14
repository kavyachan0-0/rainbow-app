import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("rainbow");

  // Function to handle button click and speak the color
  const handleClick = (colorName, text) => {
    setColor(colorName);
    setText(text);
    speakColor(text); // Call speakColor function to speak the color
  };

  // Function to speak the color using SpeechSynthesis
  const speakColor = (colorText) => {
    // Check if SpeechSynthesis is available in the browser
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(colorText);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Speech synthesis is not supported in your browser.');
    }
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className="text-center text-6xl font-extrabold pt-96 text-white">{text}</h1>
      
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-2xl bg-white rounded-3xl py-2 px-3 gap-3">
          <button
            onClick={() => handleClick('red', 'RED')}
            className="button"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleClick('orange', 'ORANGE')}
            className="button"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => handleClick('yellow', 'YELLOW')}
            className="button"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleClick('green', 'GREEN')}
            className="button"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => handleClick('blue', 'BLUE')}
            className="button"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => handleClick('indigo', 'INDIGO')}
            className="button"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
            onClick={() => handleClick('violet', 'VIOLET')}
            className="button"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
