import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PortugalEntries from './model/PortugalEntries';
import Entry from './model/Entry';
import { getTownData, getPortugalData } from './utils/fetchData';
import ConfirmedCasesCharts from './chart/ConfirmedCasesCharts';
import NewCasesCharts from './chart/NewCasesCharts';

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

  const [trofaEntries, setTrofaEntries]: [Entry[], Function] = useState([]);

  const [ptEntries, setPtEntries]: [PortugalEntries, Function] = useState(new PortugalEntries());

  useEffect(() => {
    getTownData('TROFA', setTrofaEntries);
    getPortugalData(setPtEntries);
    //setIsFetching(false);
  }, []);

  return (
    <div className={classes.root}>
      <ConfirmedCasesCharts trofaEntries={trofaEntries} ptEntries={ptEntries} classes={classes} />
      <NewCasesCharts trofaEntries={trofaEntries} ptEntries={ptEntries} classes={classes} />
    </div>
  );
}

export default App;
