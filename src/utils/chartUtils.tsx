import Entry from "../model/Entry";
import React from "react";
import { Grid } from "@material-ui/core";

export function filterLastNDays(entries: Entry[], n: number) {
  const size = entries.length;
  if(size <= n)
    return entries;
  return entries.slice(size-n);
}

export function getChartData(entries: Entry[], label: string, chosenTheme: object) {
  return {
    datasets: [{
      label,
      fill: true,
      lineTension: 0.1,
      pointBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      data: entries.map(entry => entry.count),
      ...chosenTheme,
    }],
    labels: entries.map(entry => entry.dateStr),
  }
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

export function chartWrapper(chartElement: JSX.Element, classes: any): JSX.Element {
  return (
    <Grid item xs={12}>
      <div className={classes.chartContainer}>
        {chartElement}
      </div>
    </Grid>
  );
}

export default {
  filterLastNDays,
  getChartData,
  getChartOptions,
}