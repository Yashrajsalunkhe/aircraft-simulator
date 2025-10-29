import React from 'react';
import './Calculator.css';
import { aircraftData } from '../data/aircraftData';

const Calculator = ({
  engineType,
  setEngineType,
  inputs,
  handleInputChange,
  handleCalculate,
  results,
  setShowCharts,
  showCharts
}) => {
  const currentAircraft = aircraftData[engineType];

  return (
    <div className="calculator-container">
      {/* Aircraft Image and Name */}
      <div className="aircraft-info">
        <img 
          src={currentAircraft.image} 
          alt={currentAircraft.name}
          className="aircraft-image"
          onError={(e) => {
            e.target.onerror = null;
            // Use a placeholder aircraft image
            e.target.src = 'https://via.placeholder.com/320x180/667eea/ffffff?text=Aircraft+Image';
          }}
        />
        <h2 className="aircraft-name">{currentAircraft.name}</h2>
      </div>

      {/* Input Form */}
      <div className="input-form">
        <div className="form-group">
          <label>Engine Type:</label>
          <select 
            value={engineType} 
            onChange={(e) => setEngineType(e.target.value)}
            className="input-select"
          >
            <option value="Jet">Jet</option>
            <option value="Propeller">Propeller</option>
          </select>
        </div>

        <div className="form-group">
          <label>Initial Weight (Wi):</label>
          <input
            type="number"
            value={inputs.Wi}
            onChange={(e) => handleInputChange('Wi', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Final Weight (Wf):</label>
          <input
            type="number"
            value={inputs.Wf}
            onChange={(e) => handleInputChange('Wf', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>L/D Ratio:</label>
          <input
            type="number"
            value={inputs.LD}
            onChange={(e) => handleInputChange('LD', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>SFC (c):</label>
          <input
            type="number"
            step="0.00001"
            value={inputs.c}
            onChange={(e) => handleInputChange('c', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Velocity (V m/s):</label>
          <input
            type="number"
            value={inputs.V}
            onChange={(e) => handleInputChange('V', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Propeller Efficiency (η):</label>
          <input
            type="number"
            step="0.01"
            value={inputs.eta}
            onChange={(e) => handleInputChange('eta', e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Wind Speed (m/s):</label>
          <input
            type="number"
            value={inputs.wind}
            onChange={(e) => handleInputChange('wind', e.target.value)}
            className="input-field"
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button onClick={handleCalculate} className="btn btn-calculate">
            Calculate
          </button>
          <button 
            onClick={() => setShowCharts(!showCharts)} 
            className="btn btn-plot"
          >
            {showCharts ? 'Hide Graphs' : 'Plot Graphs'}
          </button>
        </div>

        {/* Results */}
        <div className="results">
          <h3>Results</h3>
          <p>Range = {results.range} km</p>
          <p>Endurance = {results.endurance} hr</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
