import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import Entry from '../model/Entry';
import { filterLastNDays, getChartOptions, getChartData } from '../utils/chartUtils';

const DefaultBarChart = ({ data, datapointsCount, label, theme, zeroBased }) => {
  const lastNEntries = filterLastNDays(data, datapointsCount);
  const min = Math.min(...lastNEntries.map(e=>e.count));
  const max = Math.max(...lastNEntries.map(e=>e.count));
  const margin = Math.max((max - min)/20, zeroBased ? 4 : 2);

  const suggestedMax = Math.round(max + margin);

  let suggestedMin = Math.round(min - margin);
  if(zeroBased) suggestedMin = Math.max(suggestedMin, 0);

  
  return (
    <Bar
      data={getChartData(lastNEntries, `${label} (${datapointsCount} dias)`, theme)}
      options={getChartOptions(zeroBased, suggestedMin, suggestedMax)}
    />
  );
}

DefaultBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  datapointsCount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  zeroBased: PropTypes.bool,
};

DefaultBarChart.defaultProps = {
  zeroBased: true,
};

export default DefaultBarChart;
