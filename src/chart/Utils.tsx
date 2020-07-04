import Entry from "../model/Entry";

export function filterLastNDays(entries: Entry[], n: number) {
  const size = entries.length;
  if(size <= n)
    return entries;
  return entries.slice(size-n);
}

export function getChartData(entries: Entry[], intervalLabel: string) {
  return {
    datasets: [{
      label: intervalLabel,
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      data: entries.map(entry => entry.count),
    }],
    labels: entries.map(entry => entry.dateStr),
  }
}

export function getChartOptions(text: string, beginAtZero=false) {
  return {
    maintainAspectRatio: false,
    title: {
      display: true,
      fontSize: 15,
      text,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero,
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