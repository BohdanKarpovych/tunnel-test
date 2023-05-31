import { useRef } from "react";
import { calculateMeter, calculateMile } from './service';

import './App.css';

function App() {
  
  const mileRef = useRef(null);
  const meterRef = useRef(null);

  const handleInputChange = (type) => async (event) => {
    const value = event.target.value;
    switch(type) {
      case 'MILE_UPDATED':
        const meter = await calculateMeter(value);
        meterRef.current.value = meter;
        break;
      case 'METER_UPDATED':
        const mile = await calculateMile(value);
        mileRef.current.value = mile;
        break;
      default:
        break;
    }
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
            ref={mileRef}
            onChange={handleInputChange('MILE_UPDATED')}
            
            />
        </div>
        <div className="input-group">
          <label htmlFor="meterInput" className="label">Meter:</label>
          <input 
            id="meterInput" 
            className="textbox" 
            type="number" 
            ref={meterRef}
            onChange={handleInputChange('METER_UPDATED')}
          />
        </div>
      </div>
    </div>
  );
}

export default App;