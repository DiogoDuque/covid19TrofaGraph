import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Entry from '../model/Entry';
import { filterLastNDays, getChartOptions, getChartData } from '../utils/chartUtils';

const DefaultLine = ({ data, datapointsCount, label, theme }) => {
  const lastNEntries = filterLastNDays(data, datapointsCount);
  const min = Math.min(...lastNEntries.map(e=>e.count));
  const max = Math.max(...lastNEntries.map(e=>e.count));
  const suggestedMin = Math.round(min - (max-min)/10);
  return (
    <Line
      data={getChartData(lastNEntries, label, theme)}
      options={getChartOptions(false, suggestedMin)}
    />
  );
}

DefaultLine.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
  datapointsCount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default DefaultLine;
