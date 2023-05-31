import { useRef } from "react";
import { ToastContainer } from "react-toastify";

import { calculateMeter, calculateMile } from './service';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const mileUpdated = 'MILE_UPDATED';
  const meterUpdated = 'METER_UPDATED';

  const mileRef = useRef(null);
  const meterRef = useRef(null);

  const handleInputChange = (type) => async (event) => {
    const value = event.target.value;
    const isInvalidNumber = !value || isNaN(value) || value < 0;
    switch(type) {
      case mileUpdated:
        if (isInvalidNumber) {
          meterRef.current.value = -1;
          return;
        }
        const meter = await calculateMeter(value);
        meterRef.current.value = meter;
        break;
      case meterUpdated:
        if (isInvalidNumber) {
          mileRef.current.value = -1;
          return;
        }
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
            onChange={handleInputChange(mileUpdated)}
            />
        </div>
        <div className="input-group">
          <label htmlFor="meterInput" className="label">Meter:</label>
          <input 
            id="meterInput" 
            className="textbox" 
            type="number" 
            ref={meterRef}
            onChange={handleInputChange(meterUpdated)}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;