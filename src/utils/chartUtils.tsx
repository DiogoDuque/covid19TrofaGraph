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

/** HOF WRAPPERS */
let key=0;
const cardWrapper = (element: JSX.Element): JSX.Element => (
  <Grid key={key++} item xs={6} md={3}>
    { element }
  </Grid>
);

export const cardGroupWrapper = (...components: JSX.Element[]): JSX.Element => (
  <Grid container spacing={1} direction="row" alignItems="center" justify="center">
    { components.map(component => cardWrapper(component)) }
  </Grid>
);

const chartWrapper = (chartElement: JSX.Element, styles: any): JSX.Element => (
  <Grid item xs={12} key={key++}>
    <div className={styles.chartContainer}>
      {chartElement}
    </div>
  </Grid>
);

export const chartGroupWrapper = (title: String, styles: any, ...components: JSX.Element[]) => (
  <div>
    <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
      {title}
    </Typography>
    <Grid container spacing={3}>
      {components.map(component => chartWrapper(component, styles))}
    </Grid>
  </div>
);
