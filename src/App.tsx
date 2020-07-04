import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TrofaIntected from './chart/TrofaIntected.js';
import Entry from './model/Entry';
import { getTownData } from './utils/fetchData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 30,
  },
  chartContainer: {
    position: 'relative',
    margin: 'auto',
    height: '60vh',
    width: '90vw',
  },
}));


const App: () => JSX.Element = (): JSX.Element => {
  const classes = useStyles();

  const [trofaEntries, setTrofaEntries]: [Entry[], Function] = useState([]);
  getTownData('TROFA', setTrofaEntries);

  return (
    <div className={classes.root}>
      <Typography variant="h1" style= {{ textAlign: 'center' }} gutterBottom>
        Covid19 @ Trofa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.chartContainer}>
            <TrofaIntected data={trofaEntries} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
