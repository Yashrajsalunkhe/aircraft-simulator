import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './Charts.css';
import { calculateRange, calculateEndurance } from '../utils/calculations';

const Charts = ({ engineType, inputs }) => {
  // Generate data for Range vs Final Weight
  const generateRangeData = () => {
    const { Wi, LD, c, V, eta, wind } = inputs;
    const data = [];
    const V_eff = V + wind;

    for (let i = 0; i < 50; i++) {
      const Wf = Wi * 0.5 + (Wi * 0.45 / 49) * i;
      let range;

      if (engineType === 'Jet') {
        range = calculateRange.jet(V_eff, c, LD, Wi, Wf);
      } else {
        range = calculateRange.prop(V_eff, c, LD, Wi, Wf, eta);
      }

      data.push({
        Wf: Math.round(Wf),
        Range: parseFloat((range / 1000).toFixed(2))
      });
    }

    return data;
  };

  // Generate data for Endurance vs Speed
  const generateEnduranceData = () => {
    const { Wi, Wf, LD, c, eta, V, wind } = inputs;
    const data = [];

    for (let i = 0; i < 50; i++) {
      const speed = (V - 100) + (200 / 49) * i + wind;
      let endurance;

      if (engineType === 'Jet') {
        endurance = calculateEndurance.jet(c, LD, Wi, Wf);
      } else {
        endurance = calculateEndurance.prop(c, LD, Wi, Wf, eta);
      }

      data.push({
        Speed: Math.round(speed),
        Endurance: parseFloat(endurance.toFixed(2))
      });
    }

    return data;
  };

  const rangeData = generateRangeData();
  const enduranceData = generateEnduranceData();

  return (
    <div className="charts-container">
      <h2 className="charts-title">Performance Analysis</h2>
      
      <div className="chart-wrapper">
        <h3 className="chart-title">Range vs Final Weight ({engineType})</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={rangeData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
            <XAxis 
              dataKey="Wf" 
              stroke="#495057"
              label={{ value: 'Final Weight (Wf)', position: 'insideBottom', offset: -10, fill: '#495057', fontSize: 14 }}
              tick={{ fill: '#6c757d', fontSize: 12 }}
            />
            <YAxis 
              stroke="#495057"
              label={{ value: 'Range (km)', angle: -90, position: 'insideLeft', fill: '#495057', fontSize: 14 }}
              tick={{ fill: '#6c757d', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '2px solid #667eea',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ color: '#667eea', fontWeight: '600' }}
              itemStyle={{ color: '#495057' }}
            />
            <Legend wrapperStyle={{ paddingTop: '15px' }} />
            <Line 
              type="monotone" 
              dataKey="Range" 
              stroke="#667eea" 
              strokeWidth={3}
              dot={{ fill: '#667eea', r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-wrapper">
        <h3 className="chart-title">Endurance vs Speed ({engineType})</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={enduranceData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
            <XAxis 
              dataKey="Speed" 
              stroke="#495057"
              label={{ value: 'Speed (m/s)', position: 'insideBottom', offset: -10, fill: '#495057', fontSize: 14 }}
              tick={{ fill: '#6c757d', fontSize: 12 }}
            />
            <YAxis 
              stroke="#495057"
              label={{ value: 'Endurance (hr)', angle: -90, position: 'insideLeft', fill: '#495057', fontSize: 14 }}
              tick={{ fill: '#6c757d', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '2px solid #f5576c',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ color: '#f5576c', fontWeight: '600' }}
              itemStyle={{ color: '#495057' }}
            />
            <Legend wrapperStyle={{ paddingTop: '15px' }} />
            <Line 
              type="monotone" 
              dataKey="Endurance" 
              stroke="#f5576c" 
              strokeWidth={3}
              dot={{ fill: '#f5576c', r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
