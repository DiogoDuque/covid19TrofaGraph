import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Entry from '../model/Entry';
import { filterLastNDays, getChartOptions, getChartData } from '../utils/chartUtils';

const DefaultLineChart = ({ data, datapointsCount, label, theme, zeroBased }) => {
  const lastNEntries = filterLastNDays(data, datapointsCount);
  const min = Math.min(...lastNEntries.map(e=>e.count));
  const max = Math.max(...lastNEntries.map(e=>e.count));
  const diff = Math.max((max - min)/20, zeroBased ? 4 : 2);

  const suggestedMax = Math.round(max + diff);

  let suggestedMin = Math.round(min - diff);
  if(zeroBased) suggestedMin = Math.max(suggestedMin, 0);

  
  return (
    <Line
      data={getChartData(lastNEntries, `${label} (${datapointsCount} dias)`, theme)}
      options={getChartOptions(false, suggestedMin, suggestedMax)}
    />
  );
}

DefaultLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  datapointsCount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  zeroBased: PropTypes.bool,
};

DefaultLineChart.defaultProps = {
  zeroBased: true,
};

export default DefaultLineChart;
