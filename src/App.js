import { useState, useEffect } from "react";
import { useCalculateMeter } from './api';
import { debounce, useDebounce } from './util';

import './App.css';

function App() {
  const [mile, setMile] = useState("");
  const [meter, setMeter] = useState("");
  const debounceMile = useDebounce(mile, 400);

  const calculatedMeter = useCalculateMeter(debounceMile);

  useEffect(() => {
    if (calculatedMeter) {
      setMeter(calculatedMeter);
    }
  }, [calculatedMeter]);

  const handleMileInputChange = (event) => {
    const value = event.target.value;
    setMile(value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-group">
          <label htmlFor="mileInput" className="label">Mile:</label>
          <input
            id="mileInput" 
            className="textbox"
            type="number"
            value={mile}
            onChange={handleMileInputChange}/>
        </div>
        <div className="input-group">
          <label htmlFor="meterInput" className="label">Meter:</label>
          <input 
            id="meterInput" 
            className="textbox" 
            type="number" 
            value={meter} 
            //onChange={handleMeterInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;