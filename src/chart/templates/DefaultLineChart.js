import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Entry from '../../model/Entry';
import { getEntriesSince, getChartOptions, getChartData } from '../../utils/chartUtils';

const DefaultLineChart = ({ data, dateRange, label, theme, zeroBased }) => {
  const lastNEntries = getEntriesSince(dateRange, data);
  const min = Math.min(...lastNEntries.map(e=>e.count));
  const max = Math.max(...lastNEntries.map(e=>e.count));
  const margin = Math.max((max - min)/20, zeroBased ? 4 : 2);

  const suggestedMax = Math.round(max + margin);

  let suggestedMin = Math.round(min - margin);
  if(zeroBased) suggestedMin = Math.max(suggestedMin, 0);

  
  return (
    <Line
      data={getChartData(lastNEntries, label, theme)}
      options={getChartOptions(zeroBased, suggestedMin, suggestedMax)}
    />
  );
}

DefaultLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  dateRange: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  zeroBased: PropTypes.bool,
};

DefaultLineChart.defaultProps = {
  zeroBased: true,
  dateRange: 0,
};

export default DefaultLineChart;
