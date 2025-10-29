# ✈️ Aircraft Range & Endurance Simulator

A React-based web application for simulating and analyzing aircraft range and endurance performance. This application converts the original Python tkinter application into a modern, responsive web interface.

## Features

- **Aircraft Selection**: Choose between Jet (Sukhoi Su-27 Flanker) and Propeller (Bell Boeing V-22 Osprey) aircraft
- **Parameter Customization**: Adjust initial weight, final weight, L/D ratio, SFC, velocity, propeller efficiency, and wind speed
- **Real-time Calculations**: Calculate range and endurance based on input parameters
- **Interactive Charts**: Visualize performance with dynamic graphs
  - Range vs Final Weight
  - Endurance vs Speed
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 18** - Frontend framework
- **Recharts** - Charting library for data visualization
- **CSS3** - Styling and animations

## Project Structure

```
airplane/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   │   ├── Calculator.css
│   │   ├── Charts.js
│   │   └── Charts.css
│   ├── data/
│   │   └── aircraftData.js
│   ├── utils/
│   │   └── calculations.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Formulas

### Jet Aircraft
- **Range**: `R = (V / c) * L/D * ln(Wi / Wf)`
- **Endurance**: `E = (1 / c) * L/D * ln(Wi / Wf)`

### Propeller Aircraft
- **Range**: `R = η * (L/D / c) * ln(Wi / Wf)`
- **Endurance**: `E = η * (L/D / c) * (1 - Wf / Wi)`

Where:
- `Wi` = Initial Weight
- `Wf` = Final Weight
- `L/D` = Lift-to-Drag Ratio
- `c` = Specific Fuel Consumption
- `V` = Velocity
- `η` = Propeller Efficiency

## Developer

Developed by **BLUECLUBART Pvt. Ltd.**

## Deployment

This project is ready for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## License

This project is private and proprietary.
