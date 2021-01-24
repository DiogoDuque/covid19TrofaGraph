import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import styles from '../../config/styles';

const MyHeader = ({dateRange, setDateRange }) => (
  <AppBar position="sticky" className={styles.appBar}>
    <FormControl className={styles.formControl}>
      <InputLabel id="time-label">Tempo</InputLabel>
      <Select
        labelId="time-label"
        id="time-select"
        value={dateRange}
        onChange={e => setDateRange(e.target.value)}
      >
        <MenuItem value={30}>30 dias</MenuItem>
        <MenuItem value={60}>60 dias</MenuItem>
        <MenuItem value={90}>90 dias</MenuItem>
        <MenuItem value={999999}>Desde sempre</MenuItem>
      </Select>
    </FormControl>
  </AppBar>
);

MyHeader.propTypes = {
  dateRange: PropTypes.number.isRequired,
  setDateRange: PropTypes.instanceOf(Function).isRequired,
  lastPtUpdate: PropTypes.string.isRequired,
  lastTownUpdate: PropTypes.string.isRequired,
};

export default MyHeader;
