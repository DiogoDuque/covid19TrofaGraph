import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Entry from "../model/Entry";
import { getAdaptativePointRadius } from './EntriesOps';

/** CHART ARGUMENTS */

export const getChartData = (entries: Entry[], label: string, chosenTheme: object) => ({
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
});

export const getMultipleChartData = (entriesArray: Entry[][], labels: string[], chosenThemes: object[]) => ({
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
});

export const getChartOptions = (beginAtZero=false, suggestedMin=null, suggestedMax=null) => ({
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
});

/** CHART WRAPPERS */

let key=0;
export const chartWrapper = (chartElement: JSX.Element, classes: any): JSX.Element => (
  <Grid item xs={12} key={key++}>
    <div className={classes.chartContainer}>
      {chartElement}
    </div>
  </Grid>
);

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
