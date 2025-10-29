import React, { useState, useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Charts from './components/Charts';
import { aircraftData } from './data/aircraftData';
import { calculateRange, calculateEndurance } from './utils/calculations';

function App() {
  const [engineType, setEngineType] = useState('Jet');
  const [inputs, setInputs] = useState({
    Wi: 30000,
    Wf: 20000,
    LD: 16,
    c: 0.0002,
    V: 600,
    eta: 1.0,
    wind: 0
  });
  const [results, setResults] = useState({ range: 0, endurance: 0 });
  const [showCharts, setShowCharts] = useState(false);

  // Load aircraft data when engine type changes
  useEffect(() => {
    const data = aircraftData[engineType];
    setInputs(prevInputs => ({
      Wi: data.Wi,
      Wf: data.Wf,
      LD: data.LD,
      c: data.c,
      V: data.V,
      eta: data.eta,
      wind: prevInputs.wind
    }));
  }, [engineType]);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  const handleCalculate = () => {
    try {
      const { Wi, Wf, LD, c, V, eta, wind } = inputs;
      const V_eff = V + wind;

      let range, endurance;
      
      if (engineType === 'Jet') {
        range = calculateRange.jet(V_eff, c, LD, Wi, Wf);
        endurance = calculateEndurance.jet(c, LD, Wi, Wf);
      } else {
        range = calculateRange.prop(V_eff, c, LD, Wi, Wf, eta);
        endurance = calculateEndurance.prop(c, LD, Wi, Wf, eta);
      }

      setResults({
        range: (range / 1000).toFixed(2),
        endurance: endurance.toFixed(2)
      });
    } catch (error) {
      alert('Invalid input: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>✈️ Aircraft Range & Endurance Simulator</h1>
      </header>

      <div className="app-container">
        <Calculator
          engineType={engineType}
          setEngineType={setEngineType}
          inputs={inputs}
          handleInputChange={handleInputChange}
          handleCalculate={handleCalculate}
          results={results}
          setShowCharts={setShowCharts}
          showCharts={showCharts}
        />

        {showCharts && (
          <Charts
            engineType={engineType}
            inputs={inputs}
          />
        )}
      </div>

      <footer className="app-footer">
        <p>Developed by BLUECLUBART Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

export default App;
