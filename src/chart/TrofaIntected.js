import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Entry from '../model/Entry';
import { filterLastNDays, getChartOptions, getChartData } from './Utils';

const TrofaInfected = ({ data }) => {
  const last30Entries = filterLastNDays(data, 30);
  return (
    <Line
      data={getChartData(last30Entries, '30 dias')}
      options={getChartOptions('Casos confirmados na Trofa', true)}
    />
  );
}

TrofaInfected.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Entry)).isRequired,
};

export default TrofaInfected;
