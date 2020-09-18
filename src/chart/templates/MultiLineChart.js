import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Entry from '../../model/Entry';
import { filterLastNDays, getChartOptions, getMultipleChartData } from '../../utils/chartUtils';

const MultiLineChart = ({ dataArray, datapointsCount, dateRange, labels, themes, zeroBased }) => {
  const lastNEntriesArray = dataArray.map(d=>filterLastNDays(d, datapointsCount));
  const lastEntriesFlat = lastNEntriesArray.flatMap(eArr=>eArr.map(e=>e.count));
  const min = Math.min(...lastEntriesFlat);
  const max = Math.max(...lastEntriesFlat);
  const diff = Math.max((max - min)/20, zeroBased ? 4 : 2);

  const suggestedMax = Math.round(max + diff);

  let suggestedMin = Math.round(min - diff);
  if(zeroBased) suggestedMin = Math.max(suggestedMin, 0);
  console.log(lastEntriesFlat);
  console.log(`${suggestedMin}, ${suggestedMax}`);

  if(dataArray.length !== labels.length || labels.length !== themes.length) {
    console.error('Chart arguments cardinality did not match!');
    return <Line options={getChartOptions(false, suggestedMin, suggestedMax)}/>
  }
  return (
    <Line
      data={getMultipleChartData(lastNEntriesArray, labels.map(lbl =>`${lbl} (${dateRange ? dateRange : datapointsCount} dias)`), themes)}
      options={getChartOptions(false, suggestedMin, suggestedMax)}
    />
  );
}

MultiLineChart.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(Entry))).isRequired,
  datapointsCount: PropTypes.number.isRequired,
  dateRange: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string.isRequired),
  themes: PropTypes.arrayOf(PropTypes.object.isRequired),
  zeroBased: PropTypes.bool,
};

MultiLineChart.defaultProps = {
  zeroBased: true,
  dateRange: 0,
};

export default MultiLineChart;
