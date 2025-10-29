// Range calculation for jet aircraft
const rangeJet = (V, c, LD, Wi, Wf) => {
  return (V / c) * LD * Math.log(Wi / Wf);
};

// Endurance calculation for jet aircraft
const enduranceJet = (c, LD, Wi, Wf) => {
  return (1 / c) * LD * Math.log(Wi / Wf);
};

// Range calculation for propeller aircraft
const rangeProp = (V, c, LD, Wi, Wf, eta) => {
  return eta * (LD / c) * Math.log(Wi / Wf);
};

// Endurance calculation for propeller aircraft
const enduranceProp = (c, LD, Wi, Wf, eta) => {
  return eta * (LD / c) * (1 - (Wf / Wi));
};

export const calculateRange = {
  jet: rangeJet,
  prop: rangeProp
};

export const calculateEndurance = {
  jet: enduranceJet,
  prop: enduranceProp
};
