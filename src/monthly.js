import rainfall from './rainfall.json'
import * as R from 'ramda'

const xAxisMonth = []
const yAxisMonth = [] 

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

R.forEachObjIndexed((rainFallMonthly, year)=>{
  months.map((month)=>{
    if(rainFallMonthly[month] != null){
        xAxisMonth.push(`${year}-${month}`)
        yAxisMonth.push(rainFallMonthly[month].rainfall)
    }
  })
})(rainfall)


const graphRainfallMonthly = {
  x: xAxisMonth,
  y: yAxisMonth,
  type: 'scatter'
};

const data = [graphRainfallMonthly];

Plotly.newPlot('plot', data); // eslint-disable-line no-undef
