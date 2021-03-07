import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import DateEntry from '../../model/DateEntry';
import { getChartOptions, getMultipleChartData } from '../../utils/chartUtils';
import { getEntriesSince } from '../../utils/EntriesOps';

const MultiLineChart = ({ dataArray, dateRange, labels, themes, zeroBased }) => {
  const lastNEntriesArray = dataArray.map(d=>getEntriesSince(dateRange, d));
  const lastEntriesFlat = lastNEntriesArray.flatMap(eArr=>eArr.map(e=>e.count));
  const min = Math.min(...lastEntriesFlat);
  const max = Math.max(...lastEntriesFlat);
  const offset = Math.max((max - min)/20, zeroBased ? 4 : 2);

  const suggestedMax = Math.round(max + offset);

  let suggestedMin = Math.round(min - offset);
  if(zeroBased) suggestedMin = Math.max(suggestedMin, 0);

  if(dataArray.length !== labels.length || labels.length !== themes.length) {
    console.error('Chart arguments cardinality did not match!');
    return <Line options={getChartOptions(false, suggestedMin, suggestedMax)}/>
  }
  return (
    <Line
      data={getMultipleChartData(lastNEntriesArray, labels, themes)}
      options={getChartOptions(zeroBased, suggestedMin, suggestedMax)}
    />
  );
}

MultiLineChart.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(DateEntry))).isRequired,
  dateRange: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string.isRequired),
  themes: PropTypes.arrayOf(PropTypes.object.isRequired),
  zeroBased: PropTypes.bool,
};

MultiLineChart.defaultProps = {
  zeroBased: true,
  dateRange: 0,
};

export default MultiLineChart;
