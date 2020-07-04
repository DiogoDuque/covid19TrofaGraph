import Entry from "../model/Entry";

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
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      data: entries.map(entry => entry.count),
      ...chosenTheme,
    }],
    labels: entries.map(entry => entry.dateStr),
  }
}

export function getChartOptions(beginAtZero=false, suggestedMin=null) {
  return {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero,
          suggestedMin,
        }
      }]
    },
  }
}

export default {
  filterLastNDays,
  getChartData,
  getChartOptions,
}