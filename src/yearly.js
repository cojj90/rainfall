import rainfall from './rainfall.json'

const xAxisYear = Object.keys(rainfall)
const yAxisYear = Object.values(rainfall).map((rainFallYear)=> rainFallYear.rainfall)

const graphRainfallYearly = {
  x: xAxisYear,
  y: yAxisYear,
  type: 'scatter'
};

const data = [graphRainfallYearly];

Plotly.newPlot('plot', data); // eslint-disable-line no-undef
