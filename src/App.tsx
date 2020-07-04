import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import PortugalEntries from './model/PortugalEntries';
import DefaultLine from './chart/DefaultLine';
import Entry from './model/Entry';
import { theme1 } from './config/themes';
import { getTownData, getPortugalData } from './utils/fetchData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 30,
  },
  chartContainer: {
    position: 'relative',
    margin: 'auto',
    height: '50vh',
    width: '90vw',
  },
}));

const App: () => JSX.Element = (): JSX.Element => {
  const classes = useStyles();
  function chartWrapper(chartElement: JSX.Element): JSX.Element {
    return (
      <Grid item xs={12}>
        <div className={classes.chartContainer}>
          {chartElement}
        </div>
      </Grid>
    );
  }

  const [trofaEntries, setTrofaEntries]: [Entry[], Function] = useState([]);

  const [ptEntries, setPtEntries]: [PortugalEntries, Function] = useState(new PortugalEntries());

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
    //setIsFetching(false);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" style={{ textAlign: 'center' }} gutterBottom>
        Casos confirmados
      </Typography>
      <Grid container spacing={3}>
        {chartWrapper(<DefaultLine
          data={trofaEntries}
          datapointsCount={30}
          label="Casos confirmados na Trofa"
          theme={theme1}
        />)}
        {chartWrapper(<DefaultLine
          data={ptEntries.confirmedNorth}
          datapointsCount={30}
          label="Casos confirmados no Norte"
          theme={theme1}
        />)}
        {chartWrapper(<DefaultLine
          data={ptEntries.confirmedPt}
          datapointsCount={30}
          label="Casos confirmados em Portugal"
          theme={theme1}
        />)}
      </Grid>
    </div>
  );
}

export default App;
