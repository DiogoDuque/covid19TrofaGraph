import Entry from "../model/Entry";
import React from "react";
import { Grid, Typography } from "@material-ui/core";

function getAdaptativePointRadius(entries: Entry[]): number {
  const width = window.screen.availWidth;
  const count = entries.length;
  const densityRatio = count/width;
  const densityValue = densityRatio*12;
  const retVal = Math.max(4-densityValue, 1);
  console.log(`density=${densityValue} -> ${retVal}`);
  return retVal;
}

export function getEntriesSince(dateRange: number, entries: Entry[]): Entry[] {
  const dateLimit = new Date();
  dateLimit.setDate(dateLimit.getDate() - dateRange);

  return entries.filter(e => e.date >= dateLimit);
}

export function derivateEntryValues(entries: Entry[]): Entry[] {
  let prevEntry = entries[0];
  const newCasesEntries = [new Entry(prevEntry.dateStr, 0)];

  for(let i=1; i<entries.length; i++) {
    const currEntry = entries[i];
    newCasesEntries.push(new Entry(currEntry.dateStr, currEntry.count - prevEntry.count));
    prevEntry = currEntry;
  }

  return newCasesEntries;
}

export function getChartData(entries: Entry[], label: string, chosenTheme: object) {
  const result = {
    datasets: [{
      label,
      categoryPercentage: 1.0,
      barPercentage: 0.95,
      lineTension: 0.1,
      borderWidth: 2,
      pointBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointRadius: getAdaptativePointRadius(entries),
      data: entries.map(entry => entry.count),
      ...chosenTheme,
    }],
    labels: entries.map(entry => entry.dateStr),
  };
  return result;
}

export function getMultipleChartData(entriesArray: Entry[][], labels: string[], chosenThemes: object[]) {
  const result = {
    datasets: Array.from(Array(entriesArray.length).keys()).map(i => ({
      label: labels[i],
      categoryPercentage: 1.0,
      barPercentage: 0.95,
      lineTension: 0.1,
      borderWidth: 2,
      pointBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointRadius: getAdaptativePointRadius(entriesArray[i]),
      data: entriesArray[i].map(entry => entry.count),
      ...chosenThemes[i],
    })),
    labels: entriesArray[0].map(entry => entry.dateStr),
  }
  return result;
}

export function getChartOptions(beginAtZero=false, suggestedMin=null, suggestedMax=null) {
  return {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero,
          suggestedMin,
          suggestedMax,
        }
      }]
    },
  }
}

let key=0;
export function chartWrapper(chartElement: JSX.Element, classes: any): JSX.Element {
  return (
    <Grid item xs={12} key={key++}>
      <div className={classes.chartContainer}>
        {chartElement}
      </div>
    </Grid>
  );
}

export const chartGroupWrapper = (title: String, classes: any, ...components: JSX.Element[]) => (
  <div>
    <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
      {title}
    </Typography>
    <Grid container spacing={3}>
      {components.map(component => chartWrapper(component, classes))}
    </Grid>
  </div>
);

export default {
  getEntriesSince,
  processCaseCount2NewCases: derivateEntryValues,
  getChartData,
  getChartOptions,
  chartWrapper,
  chartGroupWrapper,
}