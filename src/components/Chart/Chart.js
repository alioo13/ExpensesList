import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value);
    const TotalMaxuim = Math.max(...dataPointValues);
  return (
    <div className='chart'>
        {props.datapoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue={TotalMaxuim} 
        label={dataPoint.label}
        /> ))}
    </div>
  )
}

export default Chart