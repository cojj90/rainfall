import rainfall from './rainfall.json'
import * as R from 'ramda'

const xAxisDays = []
const yAxisDays = [] 

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
R.forEachObjIndexed((rainFallMonthly, year)=>{
  months.forEach((month)=>{
    if(rainFallMonthly[month] != null){
        days.forEach((day)=>{
          xAxisDays.push(`${year}-${month}-${day}`)
          yAxisDays.push(rainFallMonthly[month][day])
        })
        
    }
  })
})(rainfall)


const graphRainfallDaily = {
  x: xAxisDays,
  y: yAxisDays,
  type: 'scatter'
};

const data = [graphRainfallDaily];

Plotly.newPlot('plot', data); // eslint-disable-line no-undef
