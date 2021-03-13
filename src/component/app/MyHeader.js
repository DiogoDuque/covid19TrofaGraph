import React, { useState } from 'react';
import {
  AppBar, FormControl, InputLabel, Select, MenuItem, Tab, Tabs, Toolbar, Button,
  Dialog, DialogTitle, DialogActions, DialogContent, TextField,
} from '@material-ui/core';
import EntriesStore from '../../store/EntriesStore';
import GeneralStore from '../../store/GeneralStore';

const MyHeader = () => {
  const [isTimeDialogOpen, setTimeDialogOpen] = useState(false);
  const [customTimeValue, setCustomTimeValue] = useState(0);
  const [customTimeValueTmp, setCustomTimeValueTmp] = useState(0);
  const styles = GeneralStore.useState(s => s.styles);

  const validateTimeValue = n => {
    const parsedTimeValue = parseInt(n);
    return !isNaN(n) && Number.isInteger(parsedTimeValue) & parsedTimeValue > 0;
  };

  const onTabChange = (_e, v) => GeneralStore.update(s => { s.tab = v });

  const closeTimeDialog = (newValue = undefined) => {
    if (validateTimeValue(newValue)) {
      setCustomTimeValue(newValue);
      EntriesStore.update(s => { s.dateRange = parseInt(newValue) });
    } else {
      setCustomTimeValue();
    }
    setTimeDialogOpen(false);
  };

  const onTimeChange = e => {
    const value = e.target.value;
    const innerText = e.nativeEvent.target.innerText;
    if (innerText === 'Outro')
      setTimeDialogOpen(true);
    else {
      EntriesStore.update(s => { s.dateRange = value });
      setCustomTimeValue();
    }

  };

  const isTimeValueValid = validateTimeValue(customTimeValueTmp);

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar>
        <FormControl className={styles.formControl}>
          <InputLabel id="time-selector">Tempo</InputLabel>
          <Select
            labelId="time-selector"
            id="time-select"
            value={EntriesStore.useState(s => s.dateRange)}
            onChange={onTimeChange}
          >
            <MenuItem value={30}>30 dias</MenuItem>
            <MenuItem value={60}>60 dias</MenuItem>
            <MenuItem value={90}>90 dias</MenuItem>
            <MenuItem value={999999}>Desde sempre</MenuItem>
            <MenuItem value={customTimeValue}>Outro</MenuItem>
          </Select>
        </FormControl>
        <Tabs
          value={GeneralStore.useState(s => s.tab)}
          onChange={onTabChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="my tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Gráficos Gerais" />
          <Tab label="Gráficos Detalhados" />
          <Tab label="Infos" />
        </Tabs>
      </Toolbar>
      <Dialog open={isTimeDialogOpen} onClose={closeTimeDialog} aria-labelledby="time-dialog-title">
        <DialogTitle id="form-dialog-title">Define um valor de tempo</DialogTitle>
        <DialogContent>
          <TextField
            error={!isTimeValueValid}
            autoFocus
            margin="dense"
            id="time-value"
            label="Tempo (número inteiro)"
            type="numeric"
            fullWidth
            onChange={e => setCustomTimeValueTmp(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeTimeDialog(customTimeValue)} color="primary">
            Cancelar
              </Button>
          <Button onClick={() => closeTimeDialog(customTimeValueTmp)} color="primary" disabled={!isTimeValueValid}>
            Definir
              </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default MyHeader;
