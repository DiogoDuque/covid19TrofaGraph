import React from 'react';
import { AppBar, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import EntriesStore from '../../store/EntriesStore';
import GeneralStore from '../../store/GeneralStore';

const MyHeader = () => {
  const styles = GeneralStore.useState(s => s.styles);
  return (
    <AppBar position="sticky" className={styles.appBar}>
      <FormControl className={styles.formControl}>
        <InputLabel id="time-label">Tempo</InputLabel>
        <Select
          labelId="time-label"
          id="time-select"
          value={EntriesStore.useState(s => s.dateRange)}
          onChange={e => EntriesStore.update(s => {s.dateRange = e.target.value})}
        >
          <MenuItem value={30}>30 dias</MenuItem>
          <MenuItem value={60}>60 dias</MenuItem>
          <MenuItem value={90}>90 dias</MenuItem>
          <MenuItem value={999999}>Desde sempre</MenuItem>
        </Select>
      </FormControl>
    </AppBar>
)
};

export default MyHeader;
