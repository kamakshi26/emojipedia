import React from "react";
import emoji from "/src/emojipedia";
import Entry from "./entry";

function Card(props) {
  // console.log(props);

  return (
    <Entry
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emoji.map(Card)}</dl>
    </div>
  );
}

export default App;
