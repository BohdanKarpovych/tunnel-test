import './App.css';
import { useState } from "react";

function App() {
  let [mile, setMile] = useState("");
  let [meter, setMeter] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div class="input-group">
          <label for="mileInput" className="label">Mile:</label>
          <input id="mileInput" className="textbox" type="number" value={mile} onChange={onMileChange}></input>
        </div>
        <div class="input-group">
          <label for="meterInput" className="label">Meter:</label>
          <input id="meterInput" className="textbox" type="number" value={meter} onChange={onMeterChange}></input>
        </div>
      </div>
    </div>
  );

  function onMileChange(e) {
    setMile(e.target.value);
  }

  function onMeterChange(e) {
    setMeter(e.target.value);
  }
}

export default App;