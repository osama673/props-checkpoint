import React from "react";
import Player from "./Player";
import playersData from "./players";

function App() {
  return (
    <div className="App">
      <h1>Football Players</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {playersData.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
}

export default App;
